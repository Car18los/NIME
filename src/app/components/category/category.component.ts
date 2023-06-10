import { Component } from '@angular/core';
import { category } from 'src/app/models/categorys.interfaz';
import { CategoryService } from 'src/app/servicios/category.service';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  listarCategory: category[] = [];

  constructor(private categoryServices: CategoryService)
  {
    this.listarCategory = this.categoryServices.getListarCategory();
  }
  
  selectedCard(id:string){
    alert(id);
    //this.Routes.navigate(['serie'])
  }


}


