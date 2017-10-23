import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoutingModule } from './app.routes';
import { HeadComponent } from './head/head.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';

import { booksService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadComponent,
    CategoriesComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [booksService],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
