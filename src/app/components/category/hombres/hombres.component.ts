import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private HombresServices:HombresService,
    private router:Router
  ){
    this.listarHombres=this.HombresServices.getListarSeries();
  }
  selectFondo(id:number, catego:string){
    console.log(id)
    console.log(catego)
    this.router.navigate(['/fondo',id]);
  }
}
