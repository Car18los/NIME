import { Component } from '@angular/core';
import { category } from 'src/app/models/categorys.interfaz';
import { CategoryService } from 'src/app/servicios/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  listarcategory: category[] = [];

  constructor(
    private categoryServices: CategoryService
  ){
    this.listarcategory = this.categoryServices.getListarCategory();
  }
}
