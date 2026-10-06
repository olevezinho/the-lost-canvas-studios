import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '404', component: NotFound },
  { path: '**', component: NotFound }
];
