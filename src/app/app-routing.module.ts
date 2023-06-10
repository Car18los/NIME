import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { AboutComponent } from './components/about/about.component';
import { SeriesComponent } from './components/category/series/series.component';
const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'category' , component:CategoryComponent
  },
  {
    path: 'about' , component:AboutComponent
  },


  {
    path:'serie' , component: SeriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
