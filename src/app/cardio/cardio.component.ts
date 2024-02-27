import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent {
  constructor( 
    private router: Router
   ){}
 gotoregister(){
   this.router.navigate(['/register']);

 }


}
