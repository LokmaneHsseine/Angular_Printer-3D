import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  private currentPorduct: Object | undefined;
  private data: any;

  constructor(private produitService:ProduitService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data:any) {
    console.log(data);
    this.produitService.saveResource(data)
      .subscribe(res=>{
        this.router.navigateByUrl("/produit")
      },err=>{
        console.log(err);
    })
  }
}
