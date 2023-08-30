import { Component,OnInit } from '@angular/core';
import { NewsApiServicesService  } from '../services/news-api-services.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  entertainmentNewsDisplay : any =[];

  ngOnInit(): void {
    this._services.entertainment().subscribe((result)=>{
      console.log(result);
      this.entertainmentNewsDisplay = result.articles;

    })
  }
}
