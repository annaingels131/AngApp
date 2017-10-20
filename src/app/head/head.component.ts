import { Component, OnInit } from '@angular/core';

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
