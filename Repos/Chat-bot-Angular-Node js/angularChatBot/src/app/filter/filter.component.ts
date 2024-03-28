import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('total') all: number;
  @Input() apple: number = 0;
  @Input() samsung: number = 0;

  public selectedRadioButton: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);

  }

}
