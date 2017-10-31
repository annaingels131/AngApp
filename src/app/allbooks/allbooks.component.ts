import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



import { allBooks } from '../books';
import { booksService } from '../book.service'
import { BOOKS }  from '../bookObj';
import { googleBooks } from '../googlebooks';




@Component({
  selector: 'allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
  providers: [HttpClient]
})
export class AllbooksComponent implements OnInit {
  // books: allBooks[]; 
  public query: string;
  public queryString: string;
  public postList;
  
  
  searchPosts() {
      console.log('bound!', this.query);
      this.queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.query}&maxResults=36`;
      console.log('queryString!', this.queryString);
      this.getPosts();
  
    }

        
    
    getPosts(): void {
      this.http.get<Post>(this.queryString)
        .subscribe(result => {
          this.postList = result.items;
          console.log('this.postList', this.postList);
          // this.postList.forEach(post => {
          //   post.data.created = post.data.created * 1000;
          // })
        });
    }
    

  constructor(
    // private bookService: booksService,
    private http: HttpClient,    
    private router: Router,
  ) { }


  // getBooks(): void {
  //   // this.bookService.getBooks().then(books => this.books = books)
  // }

  ngOnInit() {
    // this.getBooks();
    
  }


}

export class Post {
  items:PostData[];
}

export class PostData {
  volumeInfo:Post;
}

export class PostChildren {

}



