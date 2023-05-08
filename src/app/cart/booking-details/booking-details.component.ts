import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit{
bookingForm!:FormGroup
  finalOrderObj: any;

constructor(private fb:FormBuilder, private cart:CartService, private http:HttpService, private router:Router){
this.finalOrderObj = this.cart.getOrderDetails();
}
ngOnInit(): void {
this.createFormStructure();
  }

createFormStructure(){
this.bookingForm = this.fb.group({
  "customerName":[''],
  "mobileNo":[''],
  "gender":[''],
  "dateOfBirth":[''],
  "emailId":[''],
  "address":this.fb.group({
    "line1":[''],
    "line2":[''],
    "city":[''],
    "state":[''],
    "pincode":['']
  })
})
} 

placeOrder(){
this.finalOrderObj.orderId = Math.floor(100000 + Math.random()*9000000);
const request = this.bookingForm.value;
const finalOrderRequest = {...request,...this.finalOrderObj};
console.log(this.finalOrderRequest);
this.http.postDataTotheServer("orders", finalOrderRequest).subscribe((el)=>{
if(el){
  this.router.navigate(["/cart/confirm-order"])
}
})
}
  finalOrderRequest(finalOrderRequest: any) {
  }


}
