import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiComponent } from './gui.component';
import {AuthorComponent} from "./author/author.component";
import { BookComponent } from './book/book.component';
import {RouterModule, Routes} from "@angular/router";
import {
  MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdInputModule, MdListModule, MdSelect, MdSelectModule, MdSnackBarModule, MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserComponent } from './browser/browser.component';
import { Browser2Component } from './browser2/browser2.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./services/auth.service";
import {AuthorService} from "./services/author.service";
import {AuthGuardService} from "./services/auth-guard.service";


// const appRoutes: Routes = [
//   {
//     path: 'store',
//     component: GuiComponent,
//     children: [
//       {
//         path: 'author', component: AuthorComponent, canActivate: [AuthGuardService]
//       },
//       {
//         path: 'book', component: BookComponent, canActivate: [AuthGuardService]
//       },
//       {
//         path: 'browse', component: BrowserComponent, canActivate: [AuthGuardService]
//       }]
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   }
//   ,
// ];

const appRoutes: Routes = [
  {
    path: 'store',
    component: GuiComponent,
    children: [
      {
        path: 'author', component: AuthorComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'book', component: BookComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'browser', component: BrowserComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'browser2', component: Browser2Component, canActivate: [AuthGuardService]
      },
    ]
  },
  {
    path: 'login', component: LoginComponent,
}
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
    MdSnackBarModule,
  ],
  declarations: [AuthorComponent, BookComponent, GuiComponent, BrowserComponent, Browser2Component, LoginComponent],
  providers: [AuthService, AuthorService, AuthGuardService],
})
export class GuiModule { }
