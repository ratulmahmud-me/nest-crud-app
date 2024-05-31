import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./dto/book.dto";

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) { }

    @Post("/add")
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }

    @Get("/findAll")
    findAllBook(): Book[] {
        return this.bookService.findAllBoooks();
    }

    @Put("/update")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBookService(bookId);
    }
}