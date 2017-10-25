import { allBooks } from './books';
import { BOOKS } from './bookObj';
import { Injectable } from '@angular/core';

@Injectable()

export class booksService {
    //public bookList: allBooks[];
    //public books: BOOKS;

    //constructor() {
    //this.bookList = BOOKS    
    //}

    //public getBooks() allBooks[] {
    //  return this.bookList
    //}

    //public getBookByTitle(title: string){
    //    this.bookList.forEach(movie => {
    //   if (book.title === title){
    //   return book
    //}
    //})
    //}

    getBooks(): Promise<allBooks[]> {
        return Promise.resolve(BOOKS);
    }
    getBook(title: string): Promise<allBooks> {
        return this.getBooks()
                    .then(books => books.find(book => book.title === title));
    }
}
