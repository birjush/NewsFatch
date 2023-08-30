import { Component,OnInit } from '@angular/core';
import { NewsApiServicesService  } from '../services/news-api-services.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  techNewsDisplay : any =[];

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      console.log(result);
      this.techNewsDisplay = result.articles;

    })
  }
}
