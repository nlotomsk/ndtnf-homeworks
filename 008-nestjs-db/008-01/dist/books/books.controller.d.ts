import { BooksService } from '../books/books.service';
import { BookDocument } from '../interfaces/book.schema';
import { CreateBook } from '../interfaces/book.create';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BooksService);
    create(data: CreateBook): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    findOne(id: string): Promise<BookDocument>;
    deleteOne(id: string): Promise<BookDocument>;
    updateOne(id: string, data: CreateBook): Promise<BookDocument>;
}
