import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-calculad',
  templateUrl: './calculad.component.html',
  styleUrls: ['./calculad.component.css']
})
export class CalculadComponent implements OnInit {
  
  firstElement = "Selecciona una opcion";
  tagZero = "0";
  objectiveTypeSelected : String;
  foodTypeSelected : String;
  phisicActTypeSelected : String;

  inputMeasureSelected : String;
  inputHSelected : String;
  inputWSelected : String;
  inputAgeSelected : String;

  generoSelected : String;


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
 
    this.enableContinueButton();

  }
 
  ngOnInit() {}

  navigate = () => {

    this._router.navigate(['/resultado'])
  
  }
  

  //metodos que guardaran los resultados seleccionados
  setObjective(value_of , value) {
    this.objectiveTypeSelected = value;
    this.enableContinueButton();
 }
 setAlimentType(value_of , value) {
  this.foodTypeSelected = value;
  this.enableContinueButton();
}
setPhisicTypeType(value_of , value) {
  this.phisicActTypeSelected = value;
  this.enableContinueButton();
}


setParameter() {
  let value = (<HTMLInputElement>document.getElementById("metros")).value
  console.log(value);
  this.inputMeasureSelected = value;
  this.enableContinueButton();
}

setEstatura() {
  let value = (<HTMLInputElement>document.getElementById("estatura")).value
  this.inputHSelected = value;
  this.enableContinueButton();
}

setPeso() {
  let value = (<HTMLInputElement>document.getElementById("peso")).value
  console.log(value);
  this.inputWSelected = value;
  this.enableContinueButton();
}

setEdad() {
  let value = (<HTMLInputElement>document.getElementById("edad")).value
  this.inputAgeSelected = value;
  this.enableContinueButton();
}

setMale() {
  let value = (<HTMLInputElement>document.getElementById("masc")).value
  this.generoSelected = value;
  this.enableContinueButton();
}

setFemale() {
  let value = (<HTMLInputElement>document.getElementById("fem")).value
  this.generoSelected = value;
  this.enableContinueButton();
}
//metodo que valida los campos retorna bool

enableContinueButton()
{

  if (this.validation()){
    console.log("isvalid")
  }else{
    console.log("isINvalid")
  }

   let button = (<HTMLButtonElement>document.getElementById("continueButton"))

   //button.disabled = true;

}

validation():boolean
{
  debugger
  // valida primero <select>
  if(!this.objectiveTypeSelected 
    || this.objectiveTypeSelected == this.firstElement){
      return false;
    }
   if(!this.foodTypeSelected 
    || this.foodTypeSelected == this.firstElement){
      return false;
   }
   if(!this.phisicActTypeSelected 
    || this.phisicActTypeSelected == this.firstElement){
      return false;
   }
   // valida  <imput>

   if(!this.inputMeasureSelected 
    || this.inputMeasureSelected == this.tagZero){
      return false;
   }
   if(!this.inputHSelected 
    || this.inputHSelected == this.tagZero){
      return false;
   }
   if(!this.inputWSelected 
    || this.inputWSelected == this.tagZero){
      return false;
   }
   if(!this.inputAgeSelected 
    || this.inputAgeSelected == this.tagZero){
      return false;
   }

   //valida genero

   if(!this.generoSelected
    ||this.generoSelected.length <= 0){
      return false
    }

   return true;
}
  
}


