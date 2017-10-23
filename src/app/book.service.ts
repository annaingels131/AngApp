import { allBooks } from './books';
import { BOOKS } from './bookObj';
import { Injectable } from '@angular/core';

@Injectable()

export class booksService {

    getBooks(): Promise<allBooks[]> {
        return Promise.resolve(BOOKS);
    }
    getBook(title: string): Promise<allBooks> {
        return this.getBooks()
                    .then(books => books.find(book => book.title === title));
    }

}
