import { Component, OnInit } from '@angular/core';
import {Author} from "../author";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  authors: Author[];
  selectedAuthor : Author;
  formControl = new FormControl();
  filteredAuthors: Observable<Author[]>;
  constructor() {
    this.selectedAuthor = new Author();
    this.authors = Author.getTestData();
  }
  ngOnInit() {
    this.filteredAuthors = this.formControl.valueChanges
        .startWith(null)
        .map(author => author && typeof author === 'object' ? author.name : author)
        .map(name => name ? this.filter(name) : this.authors.slice());
  }
  filter(val: string): Author[] {
    let expr = `^${val}`;
    let filteredArray = this.authors.filter(author => new RegExp(expr, 'gi').test(author.name.toString()));
    return filteredArray;
  }
  displayAuthor(author: Author): String {
    return author ? author.name : '';
  }

}
