import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  public produits:any;
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=0;
  public pages: Array<number> | undefined;
  private catService: any;
  public word:any="";

  constructor(private produitService:ProduitService, private router:Router) {
    
   }

  ngOnInit(): void {
  this.produitService.getProduits(this.word,this.currentPage,this.size,1)
    .subscribe(data=>{
      // @ts-ignore
      var tot=data.total;
      this.totalPages=Math.ceil(tot/this.size);
     
      if (this.totalPages != null) {
        this.pages = new Array<number>(this.totalPages);
      }
      this.produits=data;
    },err=>{
      console.log(err);
    })
  }


  onPageProduct(i:any) {
    this.currentPage=i;
    this.ngOnInit();
  }

  onChercher(value: any) {
    console.log(value.keyword);
    this.word=value.keyword;
    this.produitService.getProduits(this.word,this.currentPage,this.size,1)
    .subscribe(data=>{
      // @ts-ignore
      var tot=data.total;
      this.totalPages=Math.ceil(tot/this.size);
     console.log(this.totalPages);
      if (this.totalPages != null) {
        this.pages = new Array<number>(this.totalPages);
      }
      this.produits=data;
    },err=>{
      console.log(err);
    })
    
  }

  onEditProduct(p:any) {
    console.log(p.id);
    //let url=p._links.self.href;
    let url="http://localhost:8080/produits/"+p.id;

    this.router.navigateByUrl("/edit_produit/"+btoa(url));
  }

  onShowProduct(p:any) {
    //let url=p._links.self.href;
    let url="http://localhost:8080/produits/"+p.id;
    this.router.navigateByUrl("/show_produit/"+btoa(url));
  }
  onDeleteProduct(p:any){
    let url="http://localhost:8080/produitDelete/"+p.id;
    this.produitService.deleteProduit(url)
    .subscribe(data=>{
      alert("Suppression effectuée avec succes");
        //this.router.navigate(["/produit"]);
        window.location.reload();
    },error=>{
      console.log(error);
    })
   
  }
}
