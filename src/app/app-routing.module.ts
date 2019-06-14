import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadComponent } from './calculad/calculad.component';
import { DietacComponent } from './dietac/dietac.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HomeComponent } from '../app/home/home.component'




const routes: Routes = [

  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'calculad', 
    component:CalculadComponent
  },
 
  { path: 'dietac',
    component: DietacComponent 
  },

   { path: 'resultado',
    component: ResultadoComponent 
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
