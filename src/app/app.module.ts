import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { FooterComponent } from './common/footer/footer.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ApplicationsComponent } from './applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DevelopersComponent,
    FooterComponent,
    AddApplicationComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
