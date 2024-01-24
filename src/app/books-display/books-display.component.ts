import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BookDisplayComponent } from '../book-display/book-display.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-books-display',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.css',
})
export class BooksDisplayComponent {
  httpClient = inject(HttpClient);
  data: any = [];
  id: any = '';

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:5000/api/v1/books')
      .subscribe((data) => {
        this.data = data;
        console.log(data);
      });
  }

  deleteBook(id: string) {
    console.log(id);
    this.httpClient
      .delete('http://localhost:5000/api/v1/book/' + id)
      .subscribe((data) => {
        console.log(data);
        this.fetchData();
      });
  }
}
