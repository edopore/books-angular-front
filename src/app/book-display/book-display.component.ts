import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-display',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-display.component.html',
  styleUrl: './book-display.component.css',
})
export class BookDisplayComponent {
  httpClient = inject(HttpClient);
  data: any = [];
  id: string = '';
  bodyRequest: any = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Access the 'id' parameter from the URL
    });
    this.fetchData(this.id);
  }

  fetchData(id: string) {
    return this.httpClient
      .get('http://localhost:5000/api/v1/book/' + id)
      .subscribe((data) => {
        this.data = data;
      });
  }

  patchData(InputAuthor: string, InputTitle: string, yesRadio: boolean) {
    this.bodyRequest = {
      title: InputTitle,
      author: InputAuthor,
      read: yesRadio,
    };

    this.httpClient
      .patch('http://localhost:5000/api/v1/book/' + this.id, this.bodyRequest)
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/']);
  }
}
