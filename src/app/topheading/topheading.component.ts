import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService} from '../services/news-api-services.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  topheadingDisplay : any =[];

  ngOnInit(): void {
    this._services.topheading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;

    })
  }
}
