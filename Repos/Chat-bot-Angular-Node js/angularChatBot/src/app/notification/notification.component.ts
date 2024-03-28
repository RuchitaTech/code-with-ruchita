import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  description: string = "This Website is only for internal use";
  displayNotification: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  closeButton(){
    this.displayNotification =true;
  }

}
