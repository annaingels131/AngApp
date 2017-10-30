import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { allBooks } from '../books';
import { booksService } from '../book.service'
import { BOOKS }  from '../bookObj';



@Component({
  selector: 'allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books: allBooks[]; 


  constructor(
    private bookService: booksService,
    private router: Router,
  ) { }


  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books)
  }

  ngOnInit() {
    this.getBooks();
    
  }

}

