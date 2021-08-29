import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {SerieComponent} from "./serie/serie.component";
import {FilmesComponent} from "./filmes/filmes.component";
import {AssistirComponent} from "./assistir/assistir.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'series',
    component: SerieComponent
  },
  {
    path:'filmes',
    component: FilmesComponent
  },
  {
    path:'assistir',
    component: AssistirComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
