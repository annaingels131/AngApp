import {Component, OnInit, Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class allBooks {
    id: number;            
    title: string;    
    author: string;
    published: number;
    cover: string;
    
  }

// import { Injectable } from "@angular/core";
// import{ Http, Response } from "@angular/http";
// import 'rxjs/add/operator/map';

// @Injectable()

//     export class allBooks {
//         public query: string;
//         public queryString: string;
//         public postList;
        
//        // public limit: number; 


//         constructor (
//             private http: Http
//         ) {}
    
 
//         searchPosts() {
//             console.log('bound!', this.query);
//             this.queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.query}&limit=5`;
//             console.log('queryString!', this.queryString);
//             this.getBooks();
        
//           }
        
        
//            getBooks(): void {
//              this.http.get(this.queryString)
//                .subscribe(result => {
//                  this.postList = result;
//                  console.log('this.postList', this.postList);
//                });

//         }
//     };

    // https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters
    


