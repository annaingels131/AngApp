import { Component, OnInit } from '@angular/core';
import { allBooks } from '../books';
import { SearchFilterPipe } from '../search.pipe';

@Component({
  selector: 'topOfPage',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  title = "Book Database";
  
  constructor() { }

  ngOnInit() {
  }

}
