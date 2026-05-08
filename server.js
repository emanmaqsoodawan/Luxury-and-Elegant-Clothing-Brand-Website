const express = require("express");
const sql = require("mssql/msnodesqlv8");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const config = {
  server: "localhost\\SQLEXPRESS",
  database: "luxury_clothing",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);
pool.connect((err) => {
  if (err) console.error("SQL Server Error:", err);
  else console.log("Connected to SQL Server");
});

// Products
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM products");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Orders
app.post("/api/orders", async (req, res) => {
  const { customer_name, customer_email, cartItems, total_amount } = req.body;
  const transaction = new sql.Transaction(pool);
  try {
    await transaction.begin();
    const insertResult = await transaction
      .request()
      .input("customer_name", sql.VarChar, customer_name)
      .input("customer_email", sql.VarChar, customer_email)
      .input("total_amount", sql.Decimal(10, 2), total_amount)
      .query(
        "INSERT INTO orders (customer_name, customer_email, total_amount) OUTPUT inserted.id VALUES (@customer_name, @customer_email, @total_amount)",
      );

    const orderId = insertResult.recordset[0].id;

    for (const item of cartItems) {
      await transaction
        .request()
        .input("order_id", sql.Int, orderId)
        .input("product_id", sql.Int, item.id)
        .input("quantity", sql.Int, item.quantity)
        .input("price", sql.Decimal(10, 2), item.price)
        .query(
          "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (@order_id, @product_id, @quantity, @price)",
        );
    }

    await transaction.commit();
    res.status(201).json({ orderId });
  } catch (err) {
    await transaction.rollback();
    res.status(500).json({ error: err.message });
  }
});

// Admin - Get Orders
app.get("/api/admin/orders", async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT * FROM orders ORDER BY created_at DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin - Add Product
app.post("/api/admin/products", async (req, res) => {
  const { name, category, description, price, image_url } = req.body;
  try {
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("category", sql.VarChar, category)
      .input("description", sql.Text, description)
      .input("price", sql.Decimal(10, 2), price)
      .input("image_url", sql.VarChar, image_url)
      .query(
        "INSERT INTO products (name, category, description, price, image_url) VALUES (@name, @category, @description, @price, @image_url)",
      );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Newsletter
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;
  try {
    await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(
        "IF NOT EXISTS (SELECT 1 FROM newsletter_subs WHERE email = @email) INSERT INTO newsletter_subs (email) VALUES (@email)",
      );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login (Mock Auth)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ success: true, user: { name: email.split("@")[0], email } });
});

// Default fallback for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
