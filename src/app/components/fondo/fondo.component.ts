import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/models/seriess.interfaz';
import { SeriesService } from 'src/app/servicios/series.service';
import { category } from '../../models/categorys.interfaz';

@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})
export class FondoComponent {

  fondo:any={};


  constructor(
    private ActiveRoute:ActivatedRoute,
    //private router:Router,
    private SeriesServices: SeriesService, 
    private router:Router

  ){
    this.ActiveRoute.params.subscribe(params =>{
   console.log(params['id']);
    this.fondo = this.SeriesServices.getFondo(params['id']);
    console.log(this.fondo);
    });

  }

}
