import { Router } from '@angular/router';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();

  message? :string;
/* categories!: Categorie[];
newIdCat!: number;
newCategorie!: Categorie; */

  constructor(private produitService:ProduitService,
              private router:Router) { }

  ngOnInit(): void {
   // this.categories=this.produitService.listeCategories();
  }
/* addProduit(){
  //console.log(this.newProduit);
 this.produitService.ajouterProduit(this.newProduit);

 //console.log(this.newIdCat);
  this.message="Produit "+ this.newProduit.nomProduit+ " ajouté avec succès !";

/* this.newCategorie= this.produitService.consulterCategorie(this.newIdCat);

this.newProduit.categorie=this.newCategorie; 
this.router.navigate(["produits"]);*/

addProduit(){
  this.produitService.ajouterProduit(this.newProduit)
  .subscribe(prod => {
  console.log(prod);
  this.router.navigate(['produits']);
  });
  }

}
