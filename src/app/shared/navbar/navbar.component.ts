import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/models/user'; 
import { UsuariosService } from 'src/app/servicios/usuarios.service';

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

  usuarios:User[];

  constructor(private servicioUsuarios: UsuariosService) { 
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
        icon:'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Contacto',
        icon:'pi pi-user',
        routerLink: 'contact',
      },
      {
        label: 'Admin',
        icon:'pi pi-phone',
        routerLink: 'admin'
      },
    ]

    this.servicioUsuarios.getUsuarios().subscribe(callUser => {
      this.usuarios = callUser;
      console.log(callUser);
    })
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  } 
}
