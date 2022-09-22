import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[]; //un tableau de Produit

  constructor(private produitService: ProduitService) {

this.produits=produitService.listeProduit();
  }

  ngOnInit(): void {
  }

supprimerProduit(prod:Produit){
  let conf=confirm("Etes-vous sûr?")
  if(conf)// = if conf = true
  this .produitService.supprimerProduit(prod)
}

}
