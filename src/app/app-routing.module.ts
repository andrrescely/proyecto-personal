import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'section1', component: Section1Component },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'section4', component: Section4Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecciona al home por defecto
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }, // Redirecciona a home si la ruta no es válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
