import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(
    
    private router: Router 
  ) {}
  registrationdone(formulaire : NgForm){
    const link = ['login'];
    this.router.navigate(link);
    
  }

}
