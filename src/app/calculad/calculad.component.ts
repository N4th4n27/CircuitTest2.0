import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CalculadoraService} from  '../calculadora.service';


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

  inputHSelected : String;
  inputWSelected : String;
  inputAgeSelected : String;

  generoSelected : String;

  TMB:number;

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

  constructor(private _router : Router,  private cal:CalculadoraService) { 
 
    this.enableContinueButton();
  
  }
 
  ngOnInit() {}

  navigate = () => {
        //Continuo con la formula

        let w = Number(this.inputWSelected);
        let h = Number(this.inputHSelected);
        let age = Number(this.inputAgeSelected);
        this.TMB = this.cal.calculaFormula(w,h,age, this.generoSelected);
        console.log("Este es el resultado del cálculo" +this.TMB);

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

//Aqui se valida el estatus del boton "Calcular" dependiendo de que todos los campos esten llenos.

  if (this.validation()){
    console.log("todos los campos estan llenos boton cancelar habilitado")

  }else{
    console.log("boton cancelar deshabilitado")
  }

   let button = (<HTMLButtonElement>document.getElementById("continueButton"))

   //button.disabled = true;

}

validation():boolean
{
  // valida primero <select>
  if(!this.foodTypeSelected 
    || this.foodTypeSelected == this.firstElement){
      console.log("foodTypeSelected");
      return false;
   }

  if(!this.objectiveTypeSelected 
    || this.objectiveTypeSelected == this.firstElement){
      console.log("objectiveTypeSelected");
      return false;
    }

      //valida genero

   if(!this.generoSelected
    ||this.generoSelected.length <= 0){
      console.log("generoSelected");
      return false
    }
    //valida <input>
    if(!this.inputHSelected 
      || this.inputHSelected == this.tagZero){
        console.log("inputHSelected");
        return false;
     }
     if(!this.inputWSelected 
      || this.inputWSelected == this.tagZero){
        console.log("inputWSelected");
        return false;
     }
     if(!this.inputAgeSelected 
      || this.inputAgeSelected == this.tagZero){
        console.log("inputAgeSelected");
        return false;
     }


  //Valida actividad fisica
   if(!this.phisicActTypeSelected 
    || this.phisicActTypeSelected == this.firstElement){
      return false;
   }
  
   return true;
}
  
}


