import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
  selectedDrugCode:any="";
  productDetails:any="";
constructor(private route:ActivatedRoute, private http:HttpService){
this.selectedDrugCode = this.route.snapshot.paramMap.get("drugCode");
}
  ngOnInit(): void {
    this.getProductDetailsByCategory();
  }

  getProductDetailsByCategory(){
     
    const endpoint = "top-deals";
    this.http.getDataFromServer(endpoint,"drugcode",this.selectedDrugCode).subscribe((el:any)=>{
      if(el && el.length > 0){
        this.productDetails = el[0];
    }});
    
 
}
}











