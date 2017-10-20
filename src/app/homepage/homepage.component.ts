import { Component, OnInit } from '@angular/core';
import { allBooks } from '../books';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [allBooks],
})
export class HomepageComponent implements OnInit {
  
  public library:Array<Object>;
  
 
  constructor(_all: allBooks) {
    this.library = _all.getBooks();
  }




  ngOnInit() {
  }

}
