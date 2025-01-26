import pool from "../config/db.js";

const createBookTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            quantity INT NULL,
            author VARCHAR(255) NOT NULL,
            genre VARCHAR(100),
            description VARCHAR(255) NOT NULL,
            published_year INT,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;
    
    try {
        await pool.query(queryText);
        console.log("Tabela 'books' criada com sucesso");
    } catch (err) {
        console.error("Erro ao criar a tabela 'books':", err);
    }
};

export default createBookTable;
