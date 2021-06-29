import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public host:string="http://localhost:8080";
  private data: any;


  constructor(private http:HttpClient) { }

  public getProduits(word:any,page:number,size:number,visible:any){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa("chagdani"+":"+"1234")});
    return this.http.get(this.host+"/produitSearch?word="+word+"&page="+page+"&size="+size+"&visible="+visible);
  }
/*  public getProduits(url:any,page:number,size:number){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa("chagdani"+":"+"1234")});
    return this.http.get(url+"?page="+page+"&size="+size);
  }*/
  public getProduit(page:number,size:number){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa("chagdani"+":"+"1234")});
    return this.http.get(this.host+"/produitAllDelete?page="+page+"&size="+size);
  }

  public saveResource(data:any):Observable<Produit>{
    const headers=new HttpHeaders({Authorization:'Basic '+btoa("chagdani"+":"+"1234")});
    return this.http.post<Produit>(this.host+"/produitSave",data);
  }

  public getResource(url:any){
    return this.http.get(url);
  }
  public deleteProduit(url:any){
    return this.http.get(url);
  }
  public recupereProduit(url:any){
    return this.http.get(url);
  }

  public updateResource(data:any){ 
    return this.http.post(this.host+"/produitSave",data);
  }
  login(email:any,password:any){
    const headers=new HttpHeaders({Authorization:'Basic '+btoa(email+":"+password)});
    return this.http.get("http://localhost:8080/produitAll",{headers,responseType:'text' as 'json'});
  }
}
