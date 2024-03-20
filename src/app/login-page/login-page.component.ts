import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  countries = [];

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  signUpFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    signupPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private http: HttpClient,
    private apiService: ApiServiceService,
    private router: Router
  ){
    this.createLoginForm();
  }

  getCountryList(){
    // this.apiService.getCountriesList().subscribe((res: any) => {
    //   console.log(res);
    //   this.countries = res.
    // })
  }

  createLoginForm(){
    console.log(this.loginFormGroup.value);
  }

  loginSubmit(){
    console.log(this.loginFormGroup.value);
    this.router.navigate(['dashboard']);
  }

  createSignupForm(){
    console.log(this.signUpFormGroup.value);
   
  }

  signupSubmit(){
    console.log(this.signUpFormGroup.value);
    this.router.navigate(['dashboard']);
  }



}
