import {  Body, Controller, Get, Post, Param, Delete, Put,} from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { BookDocument } from '../interfaces/book.schema';
import { CreateBook } from '../interfaces/book.create';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  create(@Body() data: CreateBook): Promise<BookDocument> {
    return this.bookService.create(data);
  }

  @Get()
  async findAll(): Promise<BookDocument[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookDocument> {
    return this.bookService.getBook(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<BookDocument> {
    return this.bookService.deleteBook(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() data: CreateBook) {
    return this.bookService.updateBook(id, data);
  }
}