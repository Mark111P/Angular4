import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'movie', component: MovieComponent}
];
