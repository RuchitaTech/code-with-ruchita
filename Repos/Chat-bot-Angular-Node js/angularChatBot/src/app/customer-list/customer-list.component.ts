import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerMock } from 'src/assets/data/mock/customer';
import { ProductService } from '../services/products.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers:[ProductService]
})
export class CustomerListComponent implements OnInit {

  selectedCustomer: any;
  customers: Customer[];
  
  constructor( private productListSvc: ProductService) { }

  ngOnInit(): void {
    this.customers = this.productListSvc.getProductList();
  }

}
