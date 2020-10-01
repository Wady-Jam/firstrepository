import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = ""
  introducir_nombre = ""
  poner_apellido = ""
  poner_apellido2 =""

  constructor() {
    console.log("lo que se te pegue la gana")
  }
 
  change_name() {
    console.log("")
    this.name=this.name
    console.log(this.name)
  }
  introducir_nombre1() {
    console.log("")
    this.introducir_nombre=this.introducir_nombre
  console.log(this.introducir_nombre)
  }
  poner_apellido1() {
    console.log("")
    this.poner_apellido=this.poner_apellido
  console.log(this.poner_apellido)
  }

poner_apellidos() {
  console.log("")
  this.poner_apellido2=this.poner_apellido2
console.log(this.poner_apellido2)
}
}
