import pool from "../config/db.js";

const createBookTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,  -- O campo "price" não pode ser nulo
            quantity INT NOT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(100),
            description TEXT NOT NULL,
            published_year INT,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log("Tabela de livros criada com sucesso.");
    } catch (err) {
        console.error("Erro ao criar tabela de livros:", err);
    }
};

export default createBookTable;
