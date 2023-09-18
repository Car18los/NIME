import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/models/categorys.interfaz';
import { CategoryService } from 'src/app/servicios/category.service';
import { Series } from 'src/app/models/seriess.interfaz';
import { SeriesService } from 'src/app/servicios/series.service';
import { Hombres } from 'src/app/models/hombress.interfaz';
import { HombresService } from 'src/app/servicios/hombres.service';
import { Mujeres } from 'src/app/models/mujeress.interfaz';
import { MujeresService } from 'src/app/servicios/mujeres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listarCategory: category[] = [];
  listarSeries: Series[] = [];
  listarHombres:Hombres[] = [];
  listarMujeres:Mujeres[] = [];
 

  constructor(
    private categoryServices: CategoryService, 
    private router:Router, 
    private SeriesServices: SeriesService,
    private HombresServices:HombresService,
    private MujeresServices:MujeresService,
    ){

    this.listarCategory = this.categoryServices.getListarCategory();

    this.listarSeries = this.SeriesServices.getListarSeries();
    this.listarHombres=this.HombresServices.getListarSeries();
    this.listarMujeres=this.MujeresServices.getListarMujeres();
    let fondos = [this.listarSeries,  this.listarHombres,this.listarMujeres];
    console.log(fondos)

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
    else if(id=="104"){
      this.router.navigate(['games'])
    }
  }
}
