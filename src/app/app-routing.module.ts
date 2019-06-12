import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietacComponent } from './dietac/dietac.component';
import { HomeComponent } from '../app/home/home.component'



const routes: Routes = [

  {
    path:'home', 
    component:HomeComponent
  },
 
  { path: 'dietac',
    component: DietacComponent 
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
