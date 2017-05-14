import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {Author} from "../author";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books : Book[];
  authors : Author[];
  selectedBook : Book;
  constructor() {
    this.authors = Author.getTestData();
    this.books = Book.getTestData(this.authors);
    this.selectedBook = new Book();
  }
  ngOnInit() {
  }

  onRemoveBook(book) {
    let index = this.books.indexOf(book, 0);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  onEditBook(book) {
    this.selectedBook = Object.assign({}, book);
  }

  onSaveBook(book) {
    let index = this.books.findIndex(a => a.id == book.id);
    this.books[index] = book;
  }

  onCreateBook(book :string, author:Author) {
    let newbook=new Book(book, author);
    this.books.push(newbook);
  }
}
