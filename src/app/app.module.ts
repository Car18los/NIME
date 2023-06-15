import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SeriesComponent } from './components/category/series/series.component';
import { HombresComponent } from './components/category/hombres/hombres.component';
import { MujeresComponent } from './components/category/mujeres/mujeres.component';
import { GamesComponent } from './components/category/games/games.component';
import { FondoComponent } from './components/fondo/fondo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    AboutComponent,
    HomeComponent,
    CategoryComponent,
    SeriesComponent,
    HombresComponent,
    MujeresComponent,
    GamesComponent,
    FondoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
