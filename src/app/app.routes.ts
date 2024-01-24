import { Routes } from '@angular/router';
import { BooksDisplayComponent } from './books-display/books-display.component';
import { BookDisplayComponent } from './book-display/book-display.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookNotFoundComponent } from './book-not-found/book-not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Books API',
    component: BooksDisplayComponent,
  },
  {
    path: 'view-books',
    title: 'Books API',
    component: BooksDisplayComponent,
  },
  {
    path: 'update/:id',
    title: 'Update Book',
    component: BookDisplayComponent,
  },
  {
    path: 'create',
    title: 'Create Book',
    component: BookCreateComponent,
  },
  {
    path: '**',
    title: 'Not Found',
    component: BookNotFoundComponent,
  },
];
