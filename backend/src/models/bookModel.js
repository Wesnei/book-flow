import pool from "../config/db.js";

export const getAllBooksService = async () => {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
};

export const getBookByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    return result.rows[0];
};

export const createBookService = async (title, author, price, quantity, genre, description, publishedYear) => {
    const result = await pool.query(
        "INSERT INTO books (title, author, price, quantity, genre, description, published_year) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [title, author, price, quantity, genre, description, publishedYear]
    );
    return result.rows[0];
};

export const updateBookService = async (id, title, author, price, quantity, genre, description, publishedYear) => {
    const result = await pool.query(
        "UPDATE books SET title=$1, author=$2, price=$3, quantity=$4, genre=$5, description=$6, published_year=$7 WHERE id=$8 RETURNING *",
        [title, author, price, quantity, genre, description, publishedYear, id]
    );
    return result.rows[0];
};

export const deleteBookService = async (id) => {
    const result = await pool.query(
        "DELETE FROM books WHERE id =$1 RETURNING *",
        [id]
    );
    return result.rows[0];
};