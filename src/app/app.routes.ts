import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [
    {
        path: '',
       component : HomeComponent
    }
    ,
    {
        path : 'register',
        component: LoginComponent
    },
    {
        path:'contactus',
        component:ContactusComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path : 'login',
        component : LoginComponent
    }
   
];
