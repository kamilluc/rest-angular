import { Component, OnInit } from '@angular/core';
import {Author} from "../author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors : Author[];
  selectedAuthor : Author;
  constructor() {
    this.authors = Author.getTestData();
    this.selectedAuthor = new Author();
  }
  ngOnInit() {
  }

  onRemoveAuthor(author) {
    let index = this.authors.indexOf(author, 0);
    if (index > -1) {
      this.authors.splice(index, 1);
    }
  }

  onEditAuthor(author) {
    this.selectedAuthor = Object.assign({}, author);
  }

  onSaveAuthor(author) {
    let index = this.authors.findIndex(a => a.id == author.id);
    this.authors[index] = author;
  }

  onCreateAuthor(author2) {
    let a=new Author(author2);
    this.authors.push(a);
  }
}

