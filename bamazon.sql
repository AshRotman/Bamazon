CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER(11),
    PRIMARY KEY (item_id)
    );
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("iPhone 8", "electronics", 899.00, 20),
            ("Samsung Note 8", "electronics", 925.00, 15),
            ("cotton sheets", "housewares", 25.50, 10),
            ("casper matress", "housewares", 700, 5),
            ("ink pen", "school supplies", 2.00, 50),
            ("#2 pencil", "school supplies", 1.50, 100),
            ("college rule paper", "school supplies", 12.00, 200),
            ("monopoly", "games", 24.00, 5),
            ("chutes and ladders", "games", 22.00, 3),
            ("jenga", "games", 20.00, 8),
            ("ford floor mats", "automotive", 55.00, 15),
            ("wd-40", "automotive", 12.00, 10),
            ("Tie Dye Shirt", "Clothing", 5.50, 120),
            ("Nike Running Shorts", "Clothing", 17.99, 250);