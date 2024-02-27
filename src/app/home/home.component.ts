import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router 
  ) {}

  gotosports() {
    this.router.navigate(['/sports']); 
  }
}
