import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {Author} from "../author";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-browser2',
  templateUrl: './browser2.component.html',
  styleUrls: ['./browser2.component.css']
})
export class Browser2Component implements OnInit {
  books: Book[];
  authors : Author[];
  selectedBook : Book;
  formControl = new FormControl();
  filteredBooks: Observable<Book[]>;
  constructor() {
    this.authors = Author.getTestData();
    this.books = Book.getTestData(this.authors);
    this.selectedBook = new Book();
  }
  ngOnInit() {
    this.filteredBooks = this.formControl.valueChanges
        .startWith(null)
        .map(book => book && typeof book === 'object' ? book.title : book)
        .map(title => title ? this.filter(title) : this.books.slice());
  }
  filter(val: string): Book[] {
    let expr = `^${val}`;
    let filteredArray = this.books.filter(book => new RegExp(expr, 'gi').test(book.title.toString()));
    return filteredArray;
  }
  displayBook(book: Book): String {
    return book ? book.title : '';
  }

}
