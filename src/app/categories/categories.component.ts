import { Component, OnInit } from '@angular/core';
import { allBooks } from '../books';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [allBooks]
})
export class CategoriesComponent implements OnInit {

  public library:Array<Object>;
  
 
  constructor(_all: allBooks) {
    this.library = _all.getBooks();
  }


  ngOnInit() {
  }

}
