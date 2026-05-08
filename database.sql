CREATE DATABASE luxury_clothing;
GO

USE luxury_clothing;
GO

CREATE TABLE products (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('Men', 'Women')),
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE order_items (
    id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES dbo.orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES dbo.products(id)
);

CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE newsletter_subs (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO products (name, category, description, price, image_url) VALUES
('Modern Minimalist Dress', 'Women', 'A lightweight luxury summer dress.', 950.00, 'assets/hero_hijab_model_1778234287733.png'),
('Emerald Green Silk Dress', 'Women', 'Chic silk modest dress.', 1250.00, 'assets/woman_dress_2_1778235243107.png'),
('White Linen Summer Dress', 'Women', 'Lightweight linen with delicate hijab.', 890.00, 'assets/woman_dress_3_1778235258036.png'),
('Navy Blue Maxi Dress', 'Women', 'High-end elegant posture summer fashion.', 1100.00, 'assets/woman_dress_4_1778235271783.png'),
('Flowing Pastel Pink Dress', 'Women', 'Modern pastel flowing lightweight dress.', 1050.00, 'assets/woman_dress_1_1778235228850.png'),
('Chic Evening Gown', 'Women', 'Sophisticated chic dress.', 1500.00, 'assets/womens_elegant_hijab_1778234301647.png'),
('Pastel Pink Shalwar Kameez', 'Women', 'Elegant luxury pastel pink shalwar kameez with flowing dupatta.', 920.00, 'assets/shalwar_pink.png'),
('Emerald Green Shalwar Kameez', 'Women', 'Premium emerald green designer outfit with sheer dupatta.', 1150.00, 'assets/shalwar_green.png'),
('Golden Flowing Shalwar Kameez', 'Women', 'Sophisticated golden ensemble for luxurious special occasions.', 1300.00, 'assets/shalwar_gold.png'),
('Luxury White Chiffon Dress', 'Women', 'Pure white chiffon for special occasions.', 1600.00, 'assets/womens_elegant_hijab_1778234301647.png'),
('Light Blue Linen Suit', 'Men', 'Tailored light blue linen summer suit.', 1200.00, 'assets/man_suit_1_1778235286540.png'),
('Beige Smart-Casual Outfit', 'Men', 'Modern beige luxury summer wear.', 950.00, 'assets/man_suit_2_1778235299534.png'),
('Sleek White Summer Blazer', 'Men', 'Contemporary high-end blazer.', 1400.00, 'assets/man_suit_3_1778235314906.png'),
('Olive Green Linen Suit', 'Men', 'Modern lightweight luxury spring collection.', 1350.00, 'assets/man_suit_4_1778235336505.png'),
('Classic Tailored Suit', 'Men', 'A sharply tailored modern suit.', 1500.00, 'assets/mens_elegant_suit_1778234317045.png'),
('Navy Blue Summer Suit', 'Men', 'Lightweight navy blue elegance.', 1250.00, 'assets/man_suit_1_1778235286540.png'),
('Charcoal Grey Smart Look', 'Men', 'Premium charcoal summer fashion.', 1100.00, 'assets/man_suit_2_1778235299534.png'),
('White Linen Trousers & Shirt', 'Men', 'Perfect casual summer luxury.', 850.00, 'assets/man_suit_3_1778235314906.png'),
('Sand Colored Casual Suit', 'Men', 'Minimalistic sand-colored fashion.', 1150.00, 'assets/man_suit_4_1778235336505.png'),
('Premium Black Event Suit', 'Men', 'The ultimate black luxury suit.', 1800.00, 'assets/mens_elegant_suit_1778234317045.png');