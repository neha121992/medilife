import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{
  baseUrl:string=environment.baseUrl;
  httpHeaders:HttpHeaders=new HttpHeaders()
                          .set("Content-type","application/json")
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  

  // getDataFromServer(endpoint:string, param:string="",reqP: any ={}){
    // const url = this.baseUrl+endpoint;
    // let hhh = new HttpParams().set("pincode",reqP);
    // let qqq = new HttpParams().set("drugCode",reqP);
    // return this.http.get(url,{'headers':this.httpHeaders, params: hhh, });
  // }
  getDataFromServer(endpoint:string,key:string,value:any){
    const url = this.baseUrl + endpoint;
    let hhh = new HttpParams().set(key, value);
    return this.http.get(url,{'headers':this.httpHeaders, params: hhh });
  }

  authentication(endpoint: string, userName: string, password: string) {
    const url = this.baseUrl + endpoint;
    const httpQueryParam = new HttpParams().set("userName", userName).set("password", password);
    return this.http.get(url,{'headers':this.httpHeaders, params: httpQueryParam });
  }
}
