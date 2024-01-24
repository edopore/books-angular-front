import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css',
})
export class BookCreateComponent {
  httpClient = inject(HttpClient);
  data = [];
  bodyRequest: object = {};
  InputAuthor: string = '';
  InputTitle: string = '';
  yesRadio: boolean = false;

  constructor(private router: Router) {}

  postData(InputAuthor: string, InputTitle: string, yesRadio: boolean) {
    this.bodyRequest = {
      title: InputTitle,
      author: InputAuthor,
      read: yesRadio,
    };
    this.httpClient
      .post('http://localhost:5000/api/v1/book/create', this.bodyRequest)
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/']);
  }
}
