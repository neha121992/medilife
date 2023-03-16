import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  

  getDataFromServer(endpoint:string){
    const url = this.baseUrl+endpoint;
    return this.http.get(url,{'headers':this.httpHeaders});
  }
}
