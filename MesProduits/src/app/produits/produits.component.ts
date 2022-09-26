import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits!: Produit[]; //un tableau de Produit
//produits!:string[];
  //constructor(private produitService: ProduitService) {
constructor(){
    this.produits=[
      {idProduit:1,nomProduit:"PC Dell", prixProduit:600.00,dateCreation:new Date("01/01/2022")},
      {idProduit:2,nomProduit:"PC Asus", prixProduit:1000.00,dateCreation:new Date("03/01/2022")},
      {idProduit:3,nomProduit:"XboxOne", prixProduit:500.00,dateCreation:new Date("02/02/2022")}
    ];

//this.produits=produitService.listeProduit();
  }

  ngOnInit(): void {
    /* this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      }); */
  }



/* supprimerProduit(prod:Produit){
  let conf=confirm("Etes-vous sûr?")
  if(conf)// = if conf = true
  this .produitService.supprimerProduit(prod)
} */


}
