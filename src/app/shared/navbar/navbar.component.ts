import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/models/user'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];//declaro el arreglo que tendra las rutas del navegador

  adminVisible: boolean = false;

  displayPosition!: boolean;

  position!: string;

  value: any;

  constructor() { 
    //Creamos la funcion que cambiara de color el navbar cuando se realice un scroll
    window.addEventListener("scroll", function(){
      var menubar:any = this.document.querySelector(".p-component");
      menubar.classList.toggle("abajo", this.window.scrollY>0)
    })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon:'pi pi-home'
      },
      {
        label: 'Contacto',
        icon:'pi pi-user'
      },
      {
        label: 'Admin',
        icon:'pi pi-phone',
        visible: this.adminVisible
      },
    ]
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  } 


  //Creamos el arreglo de usuarios y creamos algunos usuarios localmente 
  usuarios: User[] = [
    {
      nombre:'admin',
      apellido:'admin',
      email:'admin@gmail.com',
      contrasenia:'admin123'
    },
    {
      nombre:'Juan',
      apellido:'Paredes',
      email:'juancito01@gmail.com',
      contrasenia:'juan132'
    },
    {
      nombre:'José',
      apellido:'Castillos',
      email:'castillito@gmail.com',
      contrasenia:'casti@gmail.com'
    }
  ];

  
}
