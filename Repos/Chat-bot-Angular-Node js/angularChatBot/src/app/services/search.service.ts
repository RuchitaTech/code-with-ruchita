import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SearchService {

    public searchText$ = new Subject<string>();
    constructor(){
    }
    onSearch( searchText: string){
        this.searchText$.next(searchText);
    }

}