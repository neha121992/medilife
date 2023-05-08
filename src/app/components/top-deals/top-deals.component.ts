import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {
  topDeals: any[] = [];
  constructor(private http: HttpService,private cart:CartService) {
  
  }

  ngOnInit() {
    this.getTopDeals();
   }

  getTopDeals() {
    const endpoint = "top-deals";
    this.http.getDataFromServer(endpoint, "", "").subscribe((el: any) => {
      if (el && el.length > 0) {
        this.topDeals = el;
        console.log(this.topDeals);
      }
    },
      error => {

      })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  } 


  addToCart(item:any){
    this.cart.addItemToCart(item);
    }
    getTopdealsByCart(){
      this.cart.getProductsDataFromLocalStorage();
    }

}
