import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { FormControl, FormGroupDirective, NgForm,Validators ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animeArr:any=[];
  quote!:string;
  anime!:string;
  constructor(private animeQuotes:QuotesService,
              
    ) { }

  ngOnInit(): void {
    this.fetchQuotes()
 
  }

  fetchQuotes(){
    this.animeQuotes?.getQuotes().subscribe((data:any)=>{
     this.animeArr=data
     
      console.log("test"+data)
    //  this.anime=this.animeArr?.anime
    //  this.quote=this.animeArr?.quote
     console.log(this.anime)
    })
  }


 




}
