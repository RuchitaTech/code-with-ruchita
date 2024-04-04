import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

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
  isPhone: boolean = false;
  
  hide = true;

  constructor( 
    private router: Router,
    private destroyRef: DestroyRef,
    private responsive: BreakpointObserver

    ) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.HandsetLandscape, Breakpoints.Small])
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(result =>{
      if (result.breakpoints[Breakpoints.Small]) {
        this.isPhone = true; 
      }
    })
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

