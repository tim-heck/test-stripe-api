CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
	description TEXT NOT NULL,
	price_pennies INT NOT NULL,
    image_url VARCHAR(2000)
);

INSERT INTO products (title, description, price_pennies, image_url) 
VALUES ('Stay Greasy T-Shirt', 'Black T-Shirt with Rock On hands and Stay Greasy text', 1000, 'images/stay-greasy-t-shirt.jpg');

INSERT INTO products (title, description, price_pennies, image_url) 
VALUES ('Stay Greasy T-Shirt', 'The greasiest shirt you could own.', 1000, 'images/stay-greasy-t-shirt.jpg');