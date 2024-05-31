import { Injectable } from "@nestjs/common";
import { Book } from "./dto/book.dto";
import {v4 as uuidv4} from "uuid";

@Injectable()
export class BookService {
    public books: Book[] = [];

    addBookService(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been saved."
    }

    findAllBoooks(): Book[] {
        return this.books;
    }

    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentBook) => {
            return book.id == currentBook.id;
        })
        this.books[index] = book;
        return "Book has been updated"
    }

    deleteBookService(bookId: string): string {
        this.books = this.books.filter((book) => {
            return book.id !== bookId;
        });
        return "Book has been deleted."
    }
}