**# E L E G A N C E - Luxury Clothing Store**

## 📋 Project Overview

**E L E G A N C E** is a full-stack e-commerce web application specializing in luxury, modest fashion for men and women. The platform provides a seamless shopping experience with advanced features including product browsing, shopping cart management, wishlist functionality, and secure order processing.

**Live Features**: Product catalog (20+ curated items), search functionality, shopping cart, wishlist system, user authentication, order management, and customer support pages.

---

## ✨ Key Features

### Customer Features
- 🛍️ **Product Browsing** - Explore curated collections for Men and Women
- 🔍 **Advanced Search** - Search products by name and category
- ❤️ **Wishlist System** - Save favorite items for later
- 🛒 **Shopping Cart** - Add/remove items with real-time total calculation
- 💳 **Secure Checkout** - Customer order placement with email confirmation
- 👤 **User Login** - Customer authentication system

### Store Features
- 📦 **Order Management** - Track all customer orders
- 📊 **Product Management** - Admin panel for adding/managing products
- 📧 **Newsletter Subscription** - Customer email list management
- 📞 **Contact Forms** - Customer inquiry system with 24-hour response promise

### Information Pages
- 📄 **Privacy Policy** - Data protection & security details
- 🚚 **Shipping & Returns** - Free global express shipping, 30-day returns
- 📧 **Contact Page** - Customer support inquiry form

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern responsive styling with custom properties
- **JavaScript (Vanilla)** - Dynamic DOM manipulation and event handling
- **Google Fonts** - Cinzel (elegant headings), Montserrat (body text)

### Backend
- **Node.js** - Server runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing for API access

### Database
- **SQL Server** - Relational database management
- **SQL (T-SQL)** - Database queries and transactions

### Key Dependencies
```json
{
  "express": "^4.22.1",
  "mssql": "^9.1.1",
  "msnodesqlv8": "^2.0.0",
  "cors": "^2.8.5"
}
```

---

## 📦 Project Structure

```
Web Engineering Project/
├── database.sql              # Database schema & sample data
├── server.js                 # Express server configuration
├── package.json              # Project dependencies
├── public/
│   ├── index.html           # Main homepage
│   ├── contact.html         # Contact page
│   ├── privacy.html         # Privacy policy
│   ├── shipping.html        # Shipping & returns info
│   ├── assets/              # Product images
│   │   └── *.png            # High-quality product photos
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   └── js/
│       └── main.js          # Frontend JavaScript logic
```

---

## 🗄️ Database Schema

### Tables
1. **products** - Store product catalog (20 items: dresses, suits, etc.)
2. **orders** - Customer order records with timestamps
3. **order_items** - Individual items within each order
4. **users** - Customer user accounts
5. **newsletter_subs** - Newsletter subscriber emails

### Sample Products
- Women: Modern dresses, shalwar kameez sets, evening gowns ($890-$1600)
- Men: Tailored suits, blazers, linen outfits ($850-$1800)

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 14+
- SQL Server 2019+ (with Express or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/luxury-clothing-store.git
cd luxury-clothing-store
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Database**
```bash
# Run the SQL script in SQL Server
sqlcmd -S localhost\SQLEXPRESS -i database.sql
```

4. **Configure Server**
Edit server.js to match your SQL Server connection details:
```javascript
const config = {
  server: "localhost\\SQLEXPRESS",
  database: "luxury_clothing",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};
```

5. **Start the server**
```bash
npm start
```
Server runs on `http://localhost:3000`

---

## 📡 API Endpoints

### Products
- `GET /api/products` - Retrieve all products

### Orders
- `POST /api/orders` - Create new customer order
- `GET /api/admin/orders` - View all orders (admin)

### Admin
- `POST /api/admin/products` - Add new product (admin)

### Frontend
- `GET /` - Main homepage
- `GET /contact.html` - Contact page
- `GET /privacy.html` - Privacy policy
- `GET /shipping.html` - Shipping information

---

## 💻 Usage

### For Customers
1. Visit homepage and browse product collections
2. Search for specific items using the search bar
3. Add items to cart or wishlist
4. Proceed to checkout with name and email
5. Confirm order and receive confirmation

### For Admins
1. Access admin endpoints to manage products
2. View customer orders and order details
3. Add new products to the catalog
4. Manage newsletter subscriptions

---

## 🎨 Design Highlights

- **Luxury Aesthetic**: Elegant typography and color scheme (gold/black/white)
- **Responsive Design**: Mobile-friendly interface for all devices
- **User Experience**: Intuitive navigation with clear product categorization
- **Performance**: Lightweight JavaScript for fast page loads
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

---

## 🔐 Security Features

- **Data Protection**: Encrypted customer information in database
- **CORS Enabled**: Secure API access from frontend
- **SQL Server Security**: Trusted connection & certificate validation
- **Input Validation**: Form validation on frontend and backend
- **Privacy Policy**: Clear data usage and protection guidelines

---

## 📈 Product Catalog

**20 Premium Items:**
- **Women's Collection** (11 items)
  - Dresses: Modern Minimalist, Emerald Green Silk, White Linen, Navy Blue Maxi, Flowing Pastel Pink, Chic Evening Gown
  - Traditional: Pastel Pink Shalwar Kameez, Emerald Green Shalwar Kameez, Golden Flowing Shalwar Kameez
  - Special: Luxury White Chiffon Dress
  
- **Men's Collection** (10 items)
  - Suits: Light Blue Linen, Beige Smart-Casual, White Summer Blazer, Olive Green Linen, Classic Tailored, Navy Blue Summer, Charcoal Grey, Sand Colored Casual, Premium Black Event
  - Casual: White Linen Trousers & Shirt

---

## 🚀 Features in Development

- User account management
- Advanced filtering and sorting
- Product reviews and ratings
- Email notifications
- Inventory management
- Payment gateway integration
- Order tracking system

---

## 📝 License

This project is part of the Web Engineering course. All rights reserved © 2026.

---

## 🤝 Contributing

For suggestions or improvements, please contact the development team through the contact page or email.

---

## 👥 Project Team

**E L E G A N C E Development Team**
- Full-stack web development project
- Focus: E-commerce platform & luxury fashion retail

---

## 📞 Support

For customer inquiries or support:
- **Contact Page**: contact.html
- **Response Time**: 24 hours
- **Email**: support@elegance-clothing.com

---

**Version**: 1.0.0  
**Last Updated**: May 2026
```

---

This README covers:
✅ Project overview & purpose  
✅ Features & functionality  
✅ Tech stack details  
✅ Project structure  
✅ Database schema  
✅ Installation guide  
✅ API endpoints  
✅ Usage instructions  
✅ Security features  
✅ Product catalog  

You can now add this to your GitHub repository by creating a `README.md` file in the root folder!
