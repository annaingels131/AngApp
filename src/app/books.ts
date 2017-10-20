export class allBooks {
    
    books:Array<any>; 
  
     constructor() {
         this.books = [
          {
          title: "The World of Abstract Art",
          author: "Emily Robbins",
          published: 1984,
          cover: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png",
          },
          {
          title: "Paper Craft",    
          author: "Mandt Cooper",
          published: 1994,
          cover: "https://about.canva.com/wp-content/uploads/sites/3/2015/01/creative_bookcover.png",
          },
          {
          title: "She Rises",    
          author: "Kate Worsley",
          published: 1974,
          cover: "https://i.pinimg.com/736x/9d/c3/0b/9dc30bcf29b89648aa56f882edd9569c--beautiful-book-covers-a-beautiful.jpg",
          },
          {
          title: "The Mothers",    
          author: "Brit Bennet",
          published: 1974,
          cover: "https://cdn.pastemagazine.com/www/system/images/photo_albums/30-best-book-covers-2016/large/2motherscover.jpg?1384968217",
          },
          {
          title: "Troubled Daughters, Twisted Wives",    
          author: "Sara Weinman",
          published: 1974,
          cover: "https://i.pinimg.com/736x/fe/a5/50/fea55005c0f5bb544be91171087677e6--cover-design-magazine-penguin-book-covers.jpg",
          },
          {
          title: "How to Be the Perfect Dutch",    
          author: "Kathian Brands",
          published: 1974,
          cover: "https://spark.adobe.com/images/landing/examples/how-to-book-cover.jpg",
          }
       ];
      }
      
    getBooks() {
        return this.books;
    }
    
  }