import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    redirectTo:''
  },
  {
    path:'',
    loadChildren:()=> import(`./pages/home/home.module`).then(m=>m.HomeModule)
  },
  {
    path:'contact',
    loadChildren:()=> import(`./pages/contact/contact.module`).then(m=>m.ContactModule)
  },
  {
    path:'admin',
    loadChildren:()=> import(`./pages/admin/admin.module`).then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
