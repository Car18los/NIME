import { Component } from '@angular/core';
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
    private SeriesServices: SeriesService
  ){
    this.listarSeries = this.SeriesServices.getListarSeries();
  }
  
}
