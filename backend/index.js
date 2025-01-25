import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/config/db.js";
import bookRoutes from './src/routes/bookRoutes.js';
import errorHandling from "./src/middlewares/errorHandler.js";
import createBookTable from "./src/data/createBookTable.js"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', bookRoutes);

app.use(errorHandling);

// Criação da tabela de livros
createBookTable();

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.send(`Conexão estabelecida com sucesso: ${result.rows[0].current_database}`);
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        res.status(500).send('Erro ao conectar ao banco de dados');
    }
});

app.listen(port, () => {
    console.log(`Bem vindo ao sistema de livraria: http://localhost:${port}`);
});
