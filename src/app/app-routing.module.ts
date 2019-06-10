import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietacComponent } from './dietac/dietac.component';



const routes: Routes = [
 
  { path: 'dietac', component: DietacComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
