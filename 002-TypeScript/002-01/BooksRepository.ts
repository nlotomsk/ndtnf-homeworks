import { BookModel } from './interface/Book'
import  MyBook  from './type/book'

class BooksRepository {
  async createBook (book: MyBook) {
    try {
      const newBook = new BookModel(book)
      await newBook.save()
      return newBook
    } catch (e) {
      console.error(e)
    }
  }

  async getBook (id: string) {
    try {
      return await BookModel.findById(id)
    } catch (e) {
      console.error(e)
    }
  }

  async getBooks () {
    try {
      return await BookModel.find()
    } catch (e) {
      console.error(e)
    }
  }

  async updateBook (id: string, book: MyBook) {
    try {
      const foundBook = await BookModel.findById(id)
      await foundBook.updateOne(book)
      return foundBook
    } catch (e) {
      console.error(e)
    }
  }

  async deleteBook (id: string) {
    try {
      await BookModel.deleteOne({ _id: id })
    } catch (e) {
      console.error(e)
    }
  }
}

export default BooksRepository