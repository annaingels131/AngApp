import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { allBooks } from '../books';
import { booksService } from '../book.service'
import { BOOKS }  from '../bookObj';

import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [booksService],
})
export class HomepageComponent implements OnInit {
  books: allBooks[] =[];

  constructor(
    private bookService: booksService,
    private router: Router,
  ) {

  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books.slice(0,6))
  }

  
  ngOnInit(): void {
    this.getBooks();
  }

  

}
