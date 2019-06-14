import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-calculad',
  templateUrl: './calculad.component.html',
  styleUrls: ['./calculad.component.css']
})
export class CalculadComponent implements OnInit {
  

  options = [
    'Selecciona una opcion', 
    'Perder peso',
    'Mantener',
    'Ganar musculo',
  ]
  alimentos = [
    'Selecciona una opcion', 
    'Cualquiera',
    'Paleo',
    'Vegetariana',
    'Vegana',
    'Keto',
  ]
  fisica = [
    'Selecciona una opcion', 
    'Ninguna',
    '1 o 2 veces por semana',
    '3 o 4 veces por semana',
    '5 o 6 veces por semana',
    
  ]

  constructor(private _router : Router ) { 
 

  }
 
  ngOnInit() {}

  navigate = () => {

    this._router.navigate(['/resultado'])

  }

 

}
