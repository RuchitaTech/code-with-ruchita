import { Component, OnInit } from '@angular/core';
import { ProductDetails, Products } from '../model/products.model';
import { ProductMock } from 'src/assets/data/mock/product';
import { ProductService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  totalProductCount: number;
  appleCount: number;
  sunsumgCount: number;
  productcountRadioButton: string = 'All';
  searchedProduct: string = '';
  showProductdetails: boolean = false;

  constructor( private productSvc: ProductService, private router: Router ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe((next: any)=>{
    this.products = next.products;
    console.log("Product", this.products)
    this.getTotalProductCount();
    this.getAppleProductCount();
    this.getSamsungProductCount();
    },(error: any)=>{
      throw error;
    });
    
  }

  getTotalProductCount(){
   this.totalProductCount = this.products.length;
    return this.totalProductCount;
  }

  getAppleProductCount(){
   return  this.appleCount = this.products.filter(product=>product.brand === 'Apple' ).length;
  }

  getSamsungProductCount(){
    return  this.sunsumgCount = this.products.filter(product=>product.brand === 'Samsung' ).length;
   }


   onFilterRadioButtonChanged(data:string){
    this.productcountRadioButton = data;
   }

   onSearchProduct(data:string){
    this.searchedProduct = data;
   }

   showDetails(item: Products){
    // this.productSvc.getProductdetails(item);
    // this.showProductdetails =true;
    this.router.navigate(['secure/product/details',item.id]);
   }
 
}
