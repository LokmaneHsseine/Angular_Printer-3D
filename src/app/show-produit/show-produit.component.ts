import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-show-produit',
  templateUrl: './show-produit.component.html',
  styleUrls: ['./show-produit.component.css']
})
export class ShowProduitComponent implements OnInit {
  public currentProduit: any;
  private url: string | any;
  constructor(private router:Router, private activeroute:ActivatedRoute, private produitService:ProduitService) { }

  ngOnInit(): void {
    this.url=atob(this.activeroute.snapshot.params.id);
    this.produitService.getResource(this.url).subscribe(data=>{
      this.currentProduit=data;
    },error => {
      console.log(error);
    })
  }

}
