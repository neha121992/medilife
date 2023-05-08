import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
  selectedDrugCode:string | null;
  productDetails:any;
constructor(private route:ActivatedRoute, private http:HttpService, private router:Router){

this.selectedDrugCode = this.route.snapshot.paramMap.get("drugCode");
}
  ngOnInit(): void {
    this.getProductDetailsByCategory();
  }

  getProductDetailsByCategory(){
     if(this.selectedDrugCode!=null){
    this.http.getDataFromServer("top-deals","drugCode",this.selectedDrugCode).subscribe((el:any)=>{
      if(el && el.length === 1){
        this.productDetails = el[0];
        console.log("productDetails", this.productDetails)
    }
  }, error=>{
    console.log(error);
  })

//   this.http.getDataFromServer("top-deals-by-category/top_deals","drugCode",this.selectedDrugCode).subscribe((el:any)=>{
//     if(el && el.length === 1){
//       this.productDetails = el[0];
//       console.log("productDetails", this.productDetails)
//   }
// }, error=>{
//   console.log(error);
// })
  } 
 
}
}











