import { ProduitsComponent } from './produits/produits.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';

const routes: Routes = [
  {path:"produits", component:ProduitsComponent},
  {path:"add-produit", component:AddProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
