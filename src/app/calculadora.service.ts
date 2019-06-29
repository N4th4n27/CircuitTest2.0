import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

   public TMB:number;
  //Constantes Hombre
  indexManFirst: number = 66;
  indexManSecond: number = 13.7;
  indexManThird : number = 5;
  indexManFord : number = 6.75;
//Constantes Mujer
  indexGirlFirst: number = 655;
  indexGirlSecond: number = 9.6;
  indexGirlThird : number = 1.8;
  indexGirlFord : number = 4.7;
  
  constructor() { }


// calculaFromula

public calculaFormula ( weight:number,  heigth:number,  age:number,  genero:String ): number{

  if (genero == "masc"){
    console.log("genero elegido es Hombre");
    this.TMB = this.getTMBFromMan(weight, heigth, age)

  }else if (genero == "male"){
    console.log("genero elegido es Mujer");
    this.TMB = this.getTMBFromGirl(weight, heigth, age);
  } 
  return this.TMB;

}

//Fórmula Hombre

getTMBFromMan(weight:number, heigth:number, age:number):number {

//Hombres: TMB = 66 + (13,7 x peso en kg) + (5 x altura en cm) - (6,75 x edad en años)
return this.indexManFirst + (this.indexManSecond * weight) + (this.indexManThird * heigth) - (this.indexManFord * age);
  
}

//Fórmula Mujer

getTMBFromGirl(weight:number, heigth:number, age:number):number {

  //Mujeres: TMB = 655 + (9,6 x peso en kg) + (1.8 x altura en cm) - (4,7 x edad en años)
  return this.indexGirlFirst + (this.indexGirlSecond * weight) + (this.indexGirlThird * heigth) - (this.indexGirlFord * age);
    
  }

}

