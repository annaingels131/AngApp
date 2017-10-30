import { Component, OnInit } from '@angular/core';
import { allBooks } from '../books';

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
