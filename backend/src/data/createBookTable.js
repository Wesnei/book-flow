import pool from "../config/db.js";

const createBookTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            quantity INT NOT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(100),
            description VARCHAR(255) NOT NULL,
            published_year INT,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;

    const insertBooksQuery = `
        INSERT INTO books (title, price, quantity, author, genre, description, published_year)
        VALUES
            ('Book One', 100, 10, 'Author One', 'Fiction', 'Description One', 2021),
            ('Book Two', 150, 5, 'Author Two', 'Non-Fiction', 'Description Two', 2019)
        ON CONFLICT DO NOTHING;
    `;

    try {
        await pool.query(createTableQuery);
        await pool.query(insertBooksQuery);
        console.log("Tabela de livros criada e livros de exemplo adicionados com sucesso.");
    } catch (err) {
        console.error("Erro ao criar tabela de livros ou adicionar livros de exemplo:", err);
    }
};

export default createBookTable;
