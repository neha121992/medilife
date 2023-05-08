import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cart:CartService, private router:Router){ }

  cartItems: any = [];
  checkout(){
  this.router.navigate(['/cart/booking-details']);
  }

ngOnInit(): void {
  this.cartItems = this.cart.getProductsDataFromLocalStorage();
  // this.setCartIems(cartItems);
  this.calculateTotalPrice();
  // console.log(this.finalOrder);
}
  // setCartIems(cartItems: any) {
  //   let productArr:any = [];
  //   cartItems.forEach((el:any)=>{
  //     let productObj = new Product();
  //     productObj.productName = el.description;
  //     productObj.brand = el.brand;
  //     productObj.type = el.type;
  //     productObj.drugCode = el.drugCode;
  //     productObj.actualPrice = el.actualPrice;
  //     productObj.discountedPrice = el.discountPrice;
  //     productObj.quantity = 1;
  //     productObj.productTotalPrice = Number(productObj.discountedPrice)*Number(productObj.quantity);
  //     productArr.push(productObj);
  //   });
  //   this.finalOrder.products = productArr;

  // }
// finalOrder:Order = new Order();
finalOrder:any = {};
calculateTotalPrice(){
    this.finalOrder.totalAmount = 0;
    this.finalOrder.totalDiscount = 10;
    this.cartItems.forEach((el: any)=>{
      this.finalOrder.totalAmount += Number(Number(el.discountPrice)*Number(el.quantity || 1));
    })
    this.finalOrder.finalAmountToPay = this.finalOrder.totalAmount - this.finalOrder.totalDiscount
  }




  changeQuantity(index:number, action:string){
    let productItem = this.finalOrder.products[index]
    if(action == 'Increment'){
      productItem.quantity ++;

    }else{
      productItem.quantity --;
      if(productItem.quantity <1 ){
        let res = confirm("Are you Sure");
        if (res){
          this.finalOrder.products.splice(index,1)
        }
      }
    }

      productItem.productTotalPrice = Number(productItem.discountedPrice)* Number(productItem.quantity);
      this.calculateTotalPrice();
    }
  }

// class Order{
//   orderId!:number;
//   fullName!:string;
//   mobileNo!:number;
//   emailId!:string;
//   address!:Address;
//   products!:Product[];
//   totalAmount!:number;
//   totalDiscount!:number;
//   finalAmountToPay!:number;
//   deliverdType!:string;
// }
// class Address{
//   line1!:string;
//   line2!:string;
//   city!:string;
//   state!:string;
//   pincode!:string;
//   country!:string;

// }
// class Product{
//   drugCode!:string;
//   productName!:string;
//   type!:string;
//   brand!:string;
//   actualPrice!:number;
//   discountedPrice!:number;
//   quantity!:number;
//   productTotalPrice!:number;


// }




