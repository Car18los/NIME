import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/models/categorys.interfaz';
import { CategoryService } from 'src/app/servicios/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listarCategory: category[] = [];

  constructor(private categoryServices: CategoryService, private router:Router)
  {
    this.listarCategory = this.categoryServices.getListarCategory();
  }
}
