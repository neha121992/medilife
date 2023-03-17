import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pinCodeDetail:any;
  pinCode:string="";
  displayErrorMessage:boolean=false;
  showDefaultPincode:boolean= true;
  showDilogBox:boolean=true;
  @ViewChild('closeBtn')
  closeBtn!: ElementRef;

  constructor(private http: HttpService){

  }
ngOnInit(): void {
}


verifyPincode(){
// const endpoint = "pin-code-details?"+"pincode="+this.ffff;
const endpoint = "pin-code-details";
this.http.getDataFromServer(endpoint,"pincode",this.pinCode).subscribe((el:any)=>{
  if(el && el.length > 0){
    this.pinCodeDetail = el[0];
    this.displayErrorMessage = false;
    this.showDefaultPincode = false;
    this.closeBtn.nativeElement.click();

  }else{
    this.displayErrorMessage = true;
    this.showDefaultPincode = true;

  }
})
}

}
