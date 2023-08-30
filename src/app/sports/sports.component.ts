import { Component,OnInit } from '@angular/core';
import { NewsApiServicesService  } from '../services/news-api-services.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  sportsNewsDisplay : any =[];

  ngOnInit(): void {
    this._services.sports().subscribe((result)=>{
      console.log(result);
      this.sportsNewsDisplay = result.articles;

    })
  }
}

