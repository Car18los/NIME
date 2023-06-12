import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/models/categorys.interfaz';
import { CategoryService } from 'src/app/servicios/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  listarCategory: category[] = [];

  constructor(private categoryServices: CategoryService, private router:Router)
  {
    this.listarCategory = this.categoryServices.getListarCategory();
  }
  
  selectedCard(id:string){
    if(id=="101"){
      this.router.navigate(['serie'])
    }
    else if(id=="102"){
      this.router.navigate(['hombres'])
    }
    else if(id=="103"){
      this.router.navigate(['mujeres'])
    }
  }


}


