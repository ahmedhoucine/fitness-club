import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equitation',
  templateUrl: './equitation.component.html',
  styleUrls: ['./equitation.component.css']
})
export class EquitationComponent {
  constructor( 
    private router: Router
   ){}
 gotoregister(){
   this.router.navigate(['/register']);

 }

}
