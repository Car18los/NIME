import { Component } from '@angular/core';
import { Games } from 'src/app/models/gamess.interfaz';
import { GamesService } from 'src/app/servicios/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  listarGames:Games[] = [];
  constructor(
    private GamesServices:GamesService
  ){
    this.listarGames=this.GamesServices.getListarGames();
  }

}
