import { Component,OnInit } from '@angular/core';
import { NewsApiServicesService  } from '../services/news-api-services.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{
  constructor(private _services:NewsApiServicesService){ }

  scienceNewsDisplay : any =[];

  ngOnInit(): void {
    this._services.science().subscribe((result)=>{
      console.log(result);
      this.scienceNewsDisplay = result.articles;

    })
  }
}
