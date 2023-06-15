import { Component } from '@angular/core';
import { Mujeres } from 'src/app/models/mujeress.interfaz';
import { MujeresService } from 'src/app/servicios/mujeres.service';

@Component({
  selector: 'app-mujeres',
  templateUrl: './mujeres.component.html',
  styleUrls: ['./mujeres.component.css']
})
export class MujeresComponent {
  listarMujeres:Mujeres[] = [];
  constructor(
    private MujeresServices:MujeresService
  ){
    this.listarMujeres=this.MujeresServices.getListarMujeres();
  }

}
