import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DietacComponent } from './dietac/dietac.component';
import { HomeComponent } from './home/home.component';
import { CalculadComponent } from './calculad/calculad.component';
import { ResultadoComponent } from './resultado/resultado.component';





@NgModule({
  declarations: [
    AppComponent,
    DietacComponent,
    HomeComponent,
    CalculadComponent,
    ResultadoComponent,
    
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
