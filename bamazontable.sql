DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INTEGER(20) NOT NULL,
    primary key (item_id)
);

SELECT * FROM products; 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gameboy", "electronics", 79.00, 50), 
	("macbook", "electronics", 799.00, 10),
	("chromebook", "electronics", 249.00, 25),
    ("tv", "electronics", 500.00, 50),
    ("instapot", "cooking", 99.50, 100),
    ("smoker", "cooking", 249.99, 45),
    ("blender", "cooking", 35.00, 60),
    ("sweater", "clothing", 75.00, 25),
    ("jeans", "clothing", 100.00, 40),
    ("sneakers", "clothing", 100.00, 35);
    
    
    

