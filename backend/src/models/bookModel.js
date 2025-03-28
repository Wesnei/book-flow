import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBooksService = async () => {
  const books = await prisma.book.findMany();
  return books;
};

export const getBookByIdService = async (id) => {
  const book = await prisma.book.findUnique({
    where: { id: parseInt(id) },
  });
  return book;
};

export const createBookService = async (title, author, price, quantity, genre, description, publishedYear) => {
  const newBook = await prisma.book.create({
    data: {
      title,
      author,
      price,
      quantity,
      genre,
      description,
      published_year: publishedYear,
    },
  });
  return newBook;
};

export const updateBookService = async (id, title, author, price, quantity, genre, description, publishedYear) => {
  const updatedBook = await prisma.book.update({
    where: { id: parseInt(id) },
    data: {
      title,
      author,
      price,
      quantity,
      genre,
      description,
      published_year: publishedYear,
    },
  });
  return updatedBook;
};

export const deleteBookService = async (id) => {
  const deletedBook = await prisma.book.delete({
    where: { id: parseInt(id) },
  });
  return deletedBook;
};