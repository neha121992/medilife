import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pinCodeDetail:any;
  pincode:string="";
  displayErrorMessage:boolean=false;
  showDefaultPincode:boolean= true;
  showDilogBox:boolean=true;
  constructor(private http: HttpService){

  }
ngOnInit(): void {
}

verifyPincode(){
const endpoint = "pin-code-details?"+"pincode="+this.pincode;
this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
  if(el && el.length > 0){
    this.pinCodeDetail = el[0];
    this.displayErrorMessage = false;
    this.showDefaultPincode = false;


  }else{
    this.displayErrorMessage = true;
    this.showDefaultPincode = true;

  }
})
}

}
