import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	rowData = [
		{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
		{ make: "Ford", model: "F-Series", price: 33850, electric: false },
		{ make: "Toyota", model: "Corolla", price: 29600, electric: false },
	  ];
	 
	  // Column Definitions: Defines the columns to be displayed.
	  columnDefs : ColDef[] = [
		{ field: "make" },
		{ field: "model" },
		{ field: "price" },
		{ field: "electric" }
	  ];
}
