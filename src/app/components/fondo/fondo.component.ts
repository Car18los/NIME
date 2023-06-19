import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/models/seriess.interfaz';
import { SeriesService } from 'src/app/servicios/series.service';

@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})
export class FondoComponent {
  id:string="0";
  //fondo:Series;


  constructor(
    private ActiveRoute:ActivatedRoute,
    private router:Router,
    private SeriesServices: SeriesService

  ){}
  
  ngOnInit() {
    this.ActiveRoute.params.subscribe(params =>{
      //console.log(params['id'])
      this.id=params['id'];
      this.SeriesServices.getFondo(this.id)

    })
  }

}
