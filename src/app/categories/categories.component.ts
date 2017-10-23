import { Component, OnInit } from '@angular/core';
import { allBooks } from '../books';
import { booksService } from '../book.service';
import { BOOKS } from '../bookObj';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [booksService],
  
})
export class CategoriesComponent implements OnInit {
  books: allBooks[] =[];
  
constructor (    
  private bookService: booksService,
){}

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books)
  }

  
  ngOnInit(): void {
    this.getBooks();
  }
}
