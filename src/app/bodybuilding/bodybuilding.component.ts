import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodybuilding',
  templateUrl: './bodybuilding.component.html',
  styleUrls: ['./bodybuilding.component.css']
})
export class BodybuildingComponent {
  constructor( 
     private router: Router
    ){}
  gotoregister(){
    this.router.navigate(['/register']);

  }

}
