import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];//declaro el arreglo que tendra las rutas del navegador

  constructor() { 
    //Creamos la funcion que cambiara de color el navbar cuando se realice un scroll
    window.addEventListener("scroll", function(){
      var menubar:any = this.document.querySelector(".p-component");
      menubar.classList.toggle("abajo", this.window.scrollY>0)
    })
  }

  adminVisible: boolean = false;

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
        icon:'pi pi-user-edit',
        visible: this.adminVisible
      },
    ]
  }

}
