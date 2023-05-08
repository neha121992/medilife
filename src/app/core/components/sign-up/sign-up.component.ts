import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy{
otpGenerated:number=0;
signForm!:FormGroup;
isGetOtp:boolean=false;
otpCounter:number=0;
sub!:Subscription;
isIncorrectOtp:boolean=true;
isOtpVerified:boolean=false;
  constructor(private fb:FormBuilder, private http:HttpService){

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
 
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(){
 this.signForm = this.fb.group({
 "userName":['', [Validators.required]],
 "mobileNumber":['', [Validators.required]],
 "password":['',[Validators.required, Validators.maxLength(10)]],
 "isMobNoVerified":[false]
 })
  }

  
  signUp(){
    console.log(this.signForm.value);
    this.http.postDataTotheServer("users",this.signForm.value).subscribe((el)=>{
      
    })
  }
  getOtp(){
    this.isGetOtp = true; //api call//

    this.otpGenerated = Math.floor(1000 + Math.random()*9000);
    console.log(this.otpGenerated);
    this.sub = interval(1000).subscribe((el:any)=>{
      this.otpCounter= 60-el;
      if(this.otpCounter === 0){
        this.sub.unsubscribe();
      }
    })
  }
  verifyOtp(otp:any){
    if(this.otpGenerated==otp){
    this.sub.unsubscribe;
    this.isGetOtp = false;
    this.isOtpVerified=true;
    this.isIncorrectOtp=false;
    this.signForm.controls['isMobNoVerified'].setValue(true);
    this.sub.unsubscribe();
  }else{
    this.isIncorrectOtp=true;
  }
  }
  
}

