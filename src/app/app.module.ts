import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietacComponent } from './dietac/dietac.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    DietacComponent,
    HomeComponent,
    
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
