import { Component, OnInit } from '@angular/core';
import {Author} from "../author";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {AuthorService} from "../services/author.service";
import {Router} from "@angular/router";
import {AuthorComponent} from "../author/author.component";
import {Book} from "../book";
import {MdSnackBar} from "@angular/material";

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

  constructor(private authorService: AuthorService, private snackBar: MdSnackBar) {

    this.refresh();
    this.selectedAuthor = new  Author();
    this.authors = [];

  }

  onEditAuthor(author) {
    this.selectedAuthor =  Object.assign({}, author);
  }

  refresh() {
    this.authorService.getAll()
        .subscribe(authors => {
          this.authors = authors;
        }, error =>{
          this.snackBar.open('Failed to load authors.')});
  }


  ngOnInit() {


    this.filteredAuthors = this.formControl.valueChanges
        .startWith(null)
        .map(author => author && typeof author === 'object' ? author.name : author)
        .map(name => name ? this.filterAuthor(name) : this.authors.slice());

  }


  filterAuthor(val: string): Author[] {
    let expr = `^${val}`;
    let filteredArray = this.authors.filter(author => new RegExp(expr, 'gi').test(author.name.toString()));
    return filteredArray;
  }

  displayAuthor(author: Author): string {
    return author ? author.name.toString() : '';
  }

}
// export class BrowserComponent implements OnInit {
//   authors: Author[];
//   selectedAuthor: Author;
//   formControl = new FormControl();
//   filteredAuthors: Observable<Author[]>;
//   // constructor() {
//   //   this.selectedAuthor = new Author();
//   //   //this.authors = Author.getTestData();
//   //   this.authors=AuthorService=>getAl
//   //   this.authorService.getAll()
//   //       .subscribe(authors => {
//   //         this.authors = authors;
//   //       });
//   // }
//
//   constructor(private authorService: AuthorService,
//               private router: Router,
//               ) {
//     this.selectedAuthor = new Author();
//     this.authorService.getAll().subscribe(authors => {
//       this.authors = authors;
//     });
//
//    // this.refresh();
//     //this.authors = Author.getTestData();
//     // this.authors=AuthorService=>getAl
//     // this.authorService.getAll()
//     //     .subscribe(authors => {
//     //       this.authors = authors;
//     //     });
//   }
//
//   // refresh(){
//   // this.authorService.getAll()
//   //     .subscribe(authors => {
//   //       this.authors = authors;
//   //     });
//   // }
//
//   ngOnInit() {
//     this.filteredAuthors = this.formControl.valueChanges
//         .startWith(null)
//         .map(author => author && typeof author === 'object' ? author.name : author)
//         .map(name => name ? this.filter(name) : this.authors.slice());
//   }
//   filter(val: string): Author[] {
//     let expr = `^${val}`;
//     let filteredArray = this.authors.filter(author => new RegExp(expr, 'gi').test(author.name.toString()));
//     return filteredArray;
//   }
//   displayAuthor(author: Author): String {
//     return author ? author.name : '';
//   }
//
// }
//
