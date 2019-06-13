import { Component, OnInit } from '@angular/core';

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


  constructor() { 
 



  }

  ngOnInit() {
  }

}
