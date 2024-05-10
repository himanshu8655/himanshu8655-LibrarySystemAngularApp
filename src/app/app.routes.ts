import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CheckoutPgComponent } from './checkout-pg/checkout-pg.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'check-out', component: CheckoutPgComponent },
    { path: 'book', component: AddEditBookComponent },

];
