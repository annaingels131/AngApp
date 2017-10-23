import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { allBooks } from '../books'; 
import { booksService }  from '../book.service';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  book: allBooks;

  constructor(
    private bookService: booksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(params.get('title')))
      .subscribe(book => this.book = book);
  }
 
  // constructor(
  //   private route: ActivatedRoute;
  // ) {
    
  // }


  // ngOnInit(): void {
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => this.library.getBooks(+params.get('id')))
  //     .subscribe(books => this.library = books );
  // }
}
