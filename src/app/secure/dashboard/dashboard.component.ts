// import { ColDef } from '@ag-grid-community/all-modules';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  standalone: false, 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public themeClass: string =
    "ag-theme-quartz-dark";
  constructor() { }

  ngOnInit(): void {
  }

  public defaultColDef: ColDef = {
    editable: true,
    filter: true,
  };
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];
 
  // Column Definitions: Defines the columns to be displayed.
  columnDefs : ColDef[] = [
    { field: "make" ,  filter: true, floatingFilter: true},
    { field: "model", filter: true, floatingFilter: true },
    { field: "price", filter: true, floatingFilter: true },
    { field: "electric", filter: true, floatingFilter: true }
  ];
}
