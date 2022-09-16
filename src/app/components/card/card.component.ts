import { Component, OnInit } from '@angular/core';
import { Cafe } from 'src/app/models/cafe';
import { CafesService } from 'src/app/servicios/cafes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //cafeSeleccionado:Cafe;
  valor=2
  cafes!: Cafe[];
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
 /*
  modalVisible: boolean = false;

  textoBoton!:string
  
  nuevoCafe = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('',Validators.required)
  })
*/
  constructor(private servicioCafes: CafesService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.servicioCafes.getCafe().subscribe(Colcafes=>{
      this.cafes = Colcafes;
      console.log(Colcafes)
    })
  }
/*
  mostrarEditar(cafeSeleccionado:Cafe){
    this.cafeSeleccionado=cafeSeleccionado
    this.nuevoCafe.setValue({
      nombre:cafeSeleccionado.nombre,
      precio: cafeSeleccionado.precio,
      descripcion: cafeSeleccionado.descripcion,
      imagen:cafeSeleccionado.imagen
    })
    this.textoBoton= 'Actualizar Cafe'
    this.modalVisible = true;
  }

  

  cargarCafe(){
     if(this.textoBoton==='Agregar Cafe'){
      //  this.crearCafe()
     }else if(this.textoBoton==='Actualizar Cafe'){
      //  this.actualizarCafe()
    }
  }
*/
  
  // eliminarProducto(){
  //   this.servicioCafe.deleteProducto(this.cafeSeleccionado.idcafe).then((resp)=>{
  //     alert("El producto fue eliminado con exito")
  //   })
  //   .catch((err)=>{
  //     alert("No se pudo eliminar el producto\n Error: "+err)
  //   })
  //   this.eliminarVisible=false
  // }
  // mostrarEliminar(producto:Cafe){
  //   this.eliminarVisible=true;
  //   this.cafeSeleccionado=producto
  // }
  
  

}
