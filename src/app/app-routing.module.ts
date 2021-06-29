import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "./produit/produit.component";
import {AddProduitComponent} from "./add-produit/add-produit.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";
import {ShowProduitComponent} from "./show-produit/show-produit.component";
import { LoginComponent } from './login/login.component';
import { RecupererComponent } from './recuperer/recuperer.component';

const routes: Routes = [
  {
    path:"produit",
    component: ProduitComponent
  },
  {
    path:"add_produit",
    component: AddProduitComponent
  },
  {
    path:"edit_produit/:id",
    component: EditProduitComponent
  },
  {
    path:"show_produit/:id",
    component: ShowProduitComponent
  },
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"recuperer_produit",
    component: RecupererComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
