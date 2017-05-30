import { Component, OnInit } from '@angular/core';
//import {Author} from "../author";
import {AuthorService} from "../services/author.service";
import {Author} from "../author";
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[];
  selectedAuthor: Author;
  private loading: boolean;

//   constructor() {
//     this.authors = Author.getTestData();
//     this.selectedAuthor = new Author();
//   }
//   ngOnInit() {
//   }
//
//   onRemoveAuthor(author) {
//     let index = this.authors.indexOf(author, 0);
//     if (index > -1) {
//       this.authors.splice(index, 1);
//     }
//   }
//
//   onEditAuthor(author) {
//     this.selectedAuthor = Object.assign({}, author);
//   }
//
//   onSaveAuthor(author) {
//     let index = this.authors.findIndex(a => a.id == author.id);
//     this.authors[index] = author;
//   }
//
//   onCreateAuthor(author2) {
//     let a=new Author(author2);
//     this.authors.push(a);
//   }
// }
  constructor(private authorService: AuthorService,
              private router: Router,
              private snackBar: MdSnackBar) {
    this.refresh();
    this.selectedAuthor = new Author();
  }

  refresh() {
    this.authorService.getAll()
        .subscribe(authors => {
          this.authors = authors;
        });
  }

  ngOnInit() {
  }

  onRemoveAuthor(author) {
    this.loading = true;
    let index = this.authors.indexOf(author, 0);
    if (index > -1) {
      this.authorService.remove(author.id).subscribe(
          resp => {
        this.authors.splice(index, 1);
      }, error => {
              this.snackBar.open('You need to be login as admin');
              this.loading = false;
          });
    }
  }

  onEditAuthor(author) {
    this.selectedAuthor = Object.assign({}, author);
  }

  onSaveAuthor(author) {
    this.loading = true;
    this.authorService.update(author.id, author.name).subscribe(
        author => {
          this.selectedAuthor = author;
      let index = this.authors.findIndex(a => a.id == author.id);
      this.authors[index] = author;
    }, error => {
          this.snackBar.open('You need to be login as admin');
          this.loading = false;
        });
  }

  onAddAuthor(author) {
    this.loading = true;
    this.authorService.create(author.name).subscribe(
        newAuthor => {
          this.authors.push(newAuthor);
    }, error => {
          this.snackBar.open('You need to be login as admin');
          this.loading = false;
        });
  }
}