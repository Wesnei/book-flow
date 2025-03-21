// src/data/createUserTable.js

import pool from "../config/db.js";

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    
    try {
        await pool.query(query);
        console.log("Tabela 'users' criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar a tabela 'users':", error.message);
    }
};

// Agora exporte a função corretamente
export default createUserTable;
