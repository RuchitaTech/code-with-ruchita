import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl = "http://localhost:5038/api/todoapp/"

  constructor(private http: HttpClient){

  }
  notes: any = [];

  refreshNotes(){
    this.http.get(this.APIUrl+'get-notes').subscribe(data=>{
      this.notes = data;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }

  addNotes(){
    var newNotes = (<HTMLInputElement>document.getElementById('newNotes')).value;
    var formData =  new FormData();
    if(newNotes){
      formData.append('newNotes',newNotes);
      this.http.post(this.APIUrl+'add-notes',formData).subscribe(data=>{
        alert(data);
        this.refreshNotes();
      });
    }
    else{
      alert("Please add notes before adding");
    }
  }

  deleteNotes(id: any){
    this.http.delete(this.APIUrl+'delete-notes?id='+id).subscribe(data=>{
      alert(data);
      this.refreshNotes();
    })
  }
}


