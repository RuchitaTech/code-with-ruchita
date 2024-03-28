import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.css']
})
export class DateOfBirthComponent implements OnInit {

  @ViewChild('dobInput') dobInput: ElementRef;
  @ViewChild('ageInput') ageInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(){
    let birthYear =  new Date(this.dobInput.nativeElement.value).getFullYear();
    let age = new Date().getFullYear() - birthYear;
    this.ageInput.nativeElement.value = age;
  }
  
}
