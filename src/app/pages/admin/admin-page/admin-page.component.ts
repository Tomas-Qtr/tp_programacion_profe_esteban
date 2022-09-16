import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Cafe} from '../../../models/cafe'
import { CafesService } from 'src/app/servicios/cafes.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  displayPosition: boolean = false;

  position:string;

  //variable que usamos para cambiar el agregar/editar
  textoboton:string

  cafeSeleccionado:Cafe;

  //creamos el controlador del formulario
  nuevosCafes=new FormGroup({
    nombre: new FormControl('',Validators.required)!,
    precio: new FormControl(0,Validators.required)!,
    descripcion: new FormControl('', Validators.required)!,
    imagen: new FormControl('', Validators.required)!
  })


  cafes:Cafe[]

  constructor(private servicioCafes:CafesService) { }

  ngOnInit(): void {
    this.servicioCafes.getCafe().subscribe(Colcafes=>{
      this.cafes = Colcafes;
      console.log(Colcafes)
    })
  }

  //Hacemos un metodo que agrega cafes y su datos a la base de datos y los muestra en cards
  /* agregarCafe(){

    if(this.nuevosCafes.valid){
      //Creamos una variable para agregar los productos
      let nuevoCafe:Cafe={
        //vinculamos el controlador del formulario
        nombre: this.nuevosCafes.value.nombre,
        precio: this.nuevosCafes.value.precio,
        descripcion: this.nuevosCafes.value.descripcion,
        imagen: this.nuevosCafes.value.imagen,
        idcafe:''

      }

      //declaramos la variable en el parametro
      this.servicioCafes.crearCafe(nuevoCafe).then(cafe=>{
        alert("producto agregado con exito")
      })
      .catch(error=>{
        alert("Ocurrio un error \nError: "+ error)
      })
    }
    else{
      alert("hay campos vacios")
    }
  } */
  
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
