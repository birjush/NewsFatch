import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';

const routes: Routes = [

  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //technews
  {path:'business',component:BusinessComponent}, //business
  {path:'sports',component:SportsComponent}, //sports
  {path:'entertainment',component:EntertainmentComponent}, //entertsainment
  {path:'science',component:ScienceComponent}, //sports


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
