import { Component,OnInit } from '@angular/core';
import { NewsApiServicesService  } from '../services/news-api-services.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})

export class BusinessComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  bussinessNewsDisplay : any =[];

  ngOnInit(): void {
    this._services.business().subscribe((result)=>{
      console.log(result);
      this.bussinessNewsDisplay = result.articles;

    })
  }
}

