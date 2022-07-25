-- Active: 1656553756770@@35.226.146.116@3306@gebru-4211765-dorinaldo-amorim
CREATE TABLE labecommerce_users(
id VARCHAR (255) NOT NULL PRIMARY KEY,
name VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL,
password VARCHAR (255) NOT NULL
);

INSERT INTO labecommerce_users (id, name,email, password)
VALUES
("01","pedro","pedro@gmail.com","123456" ),
("02", "carlos","carlos@gmail.com", "123456");

SELECT * FROM labecommerce_users;

DROP TABLE labecommerce_users;

CREATE TABLE labecommerce_products(
id VARCHAR (255) NOT NULL PRIMARY KEY,
name VARCHAR (255) NOT NULL,
price INT (255) NOT NULL,
image_url VARCHAR (255) NOT NULL
);

INSERT INTO labecommerce_products (id, name,price, image_url)
VALUES
("01","leite",7.89,"" ),
("02", "refrigerante",7.50, "");

SELECT * FROM labecommerce_products;

CREATE TABLE labecommerce_purchases(
 user_id VARCHAR(255) NOT NULL,
 product_id VARCHAR (255) NOT NULL,
 FOREIGN KEY (user_id ) REFERENCES labecommerce_users(id),
 FOREIGN KEY (product_id ) REFERENCES labecommerce_products(id),
 price FLOAT,
 quantity FLOAT,
 total_price FLOAT

);

INSERT INTO labecommerce_purchases (
      user_id,
    product_id,
    price,
    quantity,
    total_price
)
VALUES
("01","01",7.89,4,30),
("01","02",7.50,7, 55);

DROP TABLE labecommerce_purchases;

SELECT * FROM labecommerce_purchases;


