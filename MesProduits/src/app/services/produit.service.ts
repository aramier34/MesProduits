import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})


export class ProduitService {

  apiURL: string = 'http://localhost:8080/produits/api';


  produits!: Produit[]; //un tableau de Produit
//categories: Categorie[];

  constructor(private http : HttpClient) {

    /* this.categories=[
      {idCat:1, nomCat:"PC"},
      {idCat:2, nomCat:"Consoles"}
    ] */

   /*  this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"),categorie: {idCat:1, nomCat:"PC"}},
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"),categorie:{idCat:2, nomCat:"Consoles"} },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie:{idCat:1, nomCat:"PC"} }
    ]; */
  }

  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }


    ajouterProduit( prod: Produit):Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions);
      }

supprimerProduit(prod:Produit){
  //supprimer le produit prod du tableau produits
const index =this.produits.indexOf(prod, 0);
if (index> -1){
  this.produits.splice(index,1);
}
}
//ou bien
/*this.produits.forEach((cur,index) =>{
  if(prod.idProduit ===cur.idProduit){
    this.produits.splice(index,1);
  }
});*/
consulterProduit(id:number): Produit{

  return this.produits.find(p=>p.idProduit == id)!;
  }

  trierProduits(){
    this.produits = this.produits.sort((n1,n2) => {
    if (n1.idProduit! > n2.idProduit!) {
    return 1;
    }
    if (n1.idProduit! < n2.idProduit!) {
    return -1;
    }
    return 0;
    });
  }

  updateProduit(p:Produit){
  this.supprimerProduit(p);
  this.ajouterProduit(p);
  this.trierProduits();
}

/* listeCategories():Categorie[] {
  return this.categories;
  }

  consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
    } */


}
