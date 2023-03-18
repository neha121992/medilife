import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy{

signForm!:FormGroup;
isGetOtp:boolean=false;
otpCounter:number=0;
sub!:Subscription;
  constructor(private fb:FormBuilder){

  }
 
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(){
 this.signForm = this.fb.group({
 "userName":[''],
 "mobileNumber":[''],
 "password":[''],
 "isMobNoVerified":[false]
 })
  }

  
  signUp(){
    console.log(this.signForm.value);
  }
  getOtp(){
    this.isGetOtp = true; //api call//

    this.sub = interval(1000).subscribe((el:any)=>{
      this.otpCounter= 60-el;
      if(this.otpCounter === 0){
        this.sub.unsubscribe();
      }
    })
  }
  verifyOtp(){
    this.sub.unsubscribe;

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
     }
}
