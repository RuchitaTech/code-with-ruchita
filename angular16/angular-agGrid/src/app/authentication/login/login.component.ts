import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  username: string;
  password: string;
  errorMessage: string;
  showLogin: boolean = true;
  
  hide = true;

  constructor( 
    private router: Router

    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email, this.noSpaceAllowed]),
      password : new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    });
    this.errorMessage = "Please enter username";
  }


  onSubmit(){
    this.showLogin = false;
    this.router.navigate(['secure/home']);
    // console.log(this.loginForm);
  }

  noSpaceAllowed(control:FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true}
    }
    else{
      return null;
    }
  }
}
