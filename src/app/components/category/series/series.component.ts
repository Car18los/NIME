import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/seriess.interfaz';
import { SeriesService } from 'src/app/servicios/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  listarSeries: Series[] = [];

  constructor(
    private SeriesServices: SeriesService, 
    private router:Router
  ){
    this.listarSeries = this.SeriesServices.getListarSeries();
  }

  selectFondo(id:number, catego:string){
    console.log(id)
    console.log(catego)
    this.router.navigate(['/fondo',id]);

  }
}
