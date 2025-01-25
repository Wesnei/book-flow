import pool from "../config/db.js";

export const getAllBooksService = async () => {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
};

export const getBookByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
    return result.rows[0];
};

export const createBookService = async (title, author, genre, publishedYear) => {
    const result = await pool.query(
        "INSERT INTO books (title, author, genre, published_year) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, author, genre, publishedYear]
    );
    return result.rows[0];
};

export const updateBookService = async (id, title, author, genre, publishedYear) => {
    const result = await pool.query(
        "UPDATE books SET title=$1, author=$2, genre=$3, published_year=$4 WHERE id=$5 RETURNING *",
        [title, author, genre, publishedYear, id]
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
