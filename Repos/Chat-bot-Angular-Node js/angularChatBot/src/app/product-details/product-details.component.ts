import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products.model';
import { ProductService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:any;
  product:any;
  constructor( private productSvc: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((id: any)=>{
      this.productId = id.id;
      this.product = this.productSvc.getProductByRoute().find((x: Products) => x.id == this.productId);
      
    })
    // this.productSvc.onShowDetailsClicked.subscribe((product: Products)=>{
    //   this.product = product;
    // }) 
  }

  // getProduct(product: any){
  //   if(product.id == this.productId ){
  //     return product;
  //   }
  // }

  

}
