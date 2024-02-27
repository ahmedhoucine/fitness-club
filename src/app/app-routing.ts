import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./app/login/login.component";
import { SportsComponent } from "./sports/sports.component";
import { RegisterComponent } from "./register/register.component";
import { BodybuildingComponent } from "./bodybuilding/bodybuilding.component";

const APP_ROUTING : Routes=[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sports', component: SportsComponent},
    {path: 'sports/bodybuilding', component: BodybuildingComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING); 