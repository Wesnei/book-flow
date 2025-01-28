
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    quantity INT NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    description VARCHAR(255) NOT NULL,
    published_year INT,
    created_at TIMESTAMP DEFAULT NOW()
);