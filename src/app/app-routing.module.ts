import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ApplicationsComponent } from './applications/applications.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'add-application', component: AddApplicationComponent},
  { path: 'applications', component: ApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
