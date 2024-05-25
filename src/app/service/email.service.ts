import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:String ="http://localhost:8080";
  constructor(private http:HttpClient) { }

  sendEamil(emailData:any){

   return this.http.post(`${this.baseUrl}/sendemail`, emailData)

  }
}
