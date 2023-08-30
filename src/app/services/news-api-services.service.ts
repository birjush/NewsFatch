import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TopheadingComponent } from '../topheading/topheading.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private _http:HttpClient) {}

  newsapiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=df01d78657224cdf93621afb0a5ca4ba";
  technewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df01d78657224cdf93621afb0a5ca4ba";
  bussinessapi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df01d78657224cdf93621afb0a5ca4ba";
  sportsapi = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df01d78657224cdf93621afb0a5ca4ba";
  entertainmentapi = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=df01d78657224cdf93621afb0a5ca4ba";
  scienceapi = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=df01d78657224cdf93621afb0a5ca4ba";

    topheading():Observable<any>
    {
      return this._http.get(this.newsapiurl)
    }

    techNews():Observable<any>
    {
      return this._http.get(this.technewsapi)
    }

    business():Observable<any>
    {
      return this._http.get(this.bussinessapi)
    }
    sports():Observable<any>
    {
      return this._http.get(this.sportsapi)
    }
    entertainment():Observable<any>
    {
      return this._http.get(this.entertainmentapi)
    }
    science():Observable<any>
    {
      return this._http.get(this.scienceapi)
    }
}
