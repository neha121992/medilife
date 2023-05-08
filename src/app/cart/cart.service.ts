import { Injectable } from '@angular/core';
import { SharedService } from '../core/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getOrderDetails(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private sharedService:SharedService) { }

  addItemToCart(item: any) {
    let cartItems: any = localStorage.getItem("cartItem") || "";
    cartItems = cartItems ? JSON.parse(cartItems) : '';
    if (cartItems) {
      cartItems = cartItems;
    } else {
      cartItems = [];
    }
    cartItems.push(item);
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
    this.sharedService.emitItem(cartItems.length);
  }

  getProductsDataFromLocalStorage(): any {
    let items = localStorage.getItem("cartItem");
    if(items){
      items = JSON.parse(items);
      return items;
    }else{ 
     return [];
    }
    }
  }

