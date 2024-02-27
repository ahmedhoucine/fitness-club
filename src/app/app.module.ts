import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app-routing';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './app/login/login.component';
import { SportsComponent } from './sports/sports.component';
import { RegisterComponent } from './register/register.component';
import { BodybuildingComponent } from './bodybuilding/bodybuilding.component';
import { CardioComponent } from './cardio/cardio.component';
import { EquitationComponent } from './equitation/equitation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SportsComponent,
    RegisterComponent,
    BodybuildingComponent,
    EquitationComponent,
    CardioComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

    
    ROUTING
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
