import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : string[];

  constructor() {
    this.produits=["PC Dell","PC Asus","PS 4","XboxOne"];
  }

  ngOnInit(): void {
  }

}
