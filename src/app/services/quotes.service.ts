import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

 
  constructor(
        private http:HttpClient
  ) { }

  ngOnInit(){
    
  }

  getQuotes(){
    //https://animechan.vercel.app/api/random
   
  return this.http.get('https://animechan.vercel.app/api/random/')
  }
}
