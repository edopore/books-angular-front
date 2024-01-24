import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-display',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.css',
})
export class BooksDisplayComponent {
  data: any = [];
  id: any = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
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
