import { CustomerMock } from "src/assets/data/mock/customer";
import { LoggerService } from "./logger.service";
import { Injectable, EventEmitter } from "@angular/core";
import { ProductMock } from "src/assets/data/mock/product";
import { Products } from "../model/products.model";
import { Observable, Subject, filter, from, map, of } from "rxjs";
// import { EventEmitter } from "stream";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    
    // onShowDetailsClicked = new EventEmitter<Products>(); 
    onShowDetailsClicked = new Subject<Products>(); // To perform cross component communications, are like EventEmitters

    constructor(private logger: LoggerService){

    }

    public getProductList(){
        this.logger.logMessage(CustomerMock[0].name);
        return CustomerMock;   
    }

//    public getProducts(){
//     return Promise.resolve(ProductMock);
//     // return CustomerMock;  
//    }

    public getProducts() {
        // const myobservor = new Observable((observer) => {
        //     observer.next(ProductMock);
        // });

        const myobservor = Observable.create((observer: any)=>{
            observer.next(ProductMock.products);
        })

        // const myobservor = of(ProductMock); // "of" operator can takes as many arguments, emits as it is
        // const myobservor = from(ProductMock.products);  // "from" operators takes itearables and only takes one arguments

        // Transforming data with map to provide it to the return it to the observer
        const productDetails =  myobservor.pipe(map((res)=>{
           return { products:res }
        }));
        // const transformedData = myobservor.pipe(filter((res: Products)=>{
        //     return res['price'] > 500
        // }))
        return productDetails;
    }

    public getProductByRoute(){
        return ProductMock.products;
    }

   public getProductdetails(product: Products){
    this.onShowDetailsClicked.next(product);
   }
}