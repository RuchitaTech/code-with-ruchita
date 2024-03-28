import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchvalue: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchtext(event: any){
    this.searchvalue = (<HTMLInputElement>event.target).value;
  }

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchvalue);
  }
}
