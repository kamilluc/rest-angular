import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiComponent } from './gui.component';
import {AuthorComponent} from "./author/author.component";
import { BookComponent } from './book/book.component';
import {RouterModule, Routes} from "@angular/router";
import {
  MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdSelect, MdSelectModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserComponent } from './browser/browser.component';
import { Browser2Component } from './browser2/browser2.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'store',
    component: GuiComponent,
    children: [
      {
        path: 'author', component: AuthorComponent
      },
      {
        path: 'book', component: BookComponent
      },
      {
        path: 'browser', component: BrowserComponent
      },
      {
        path: 'browser2', component: Browser2Component
      },
      {
        path: 'login', component: LoginComponent
      },
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule,
    BrowserAnimationsModule,
    MdTooltipModule,
    FlexLayoutModule,
    MdCardModule,
    MdListModule,
    FormsModule,
    MdInputModule,
    MdTabsModule,
    MdToolbarModule,
    MdSelectModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
  ],
  declarations: [AuthorComponent, BookComponent, GuiComponent, BrowserComponent, Browser2Component, LoginComponent]
})
export class GuiModule { }
