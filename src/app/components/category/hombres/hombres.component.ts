import { Component } from '@angular/core';
import { Hombres } from 'src/app/models/hombress.interfaz';
import { HombresService } from 'src/app/servicios/hombres.service';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.component.html',
  styleUrls: ['./hombres.component.css']
})
export class HombresComponent {
  listarHombres:Hombres[] = [];
  constructor(
    private HombresServices:HombresService
  ){
    this.listarHombres=this.HombresServices.getListarSeries();
  }
}
