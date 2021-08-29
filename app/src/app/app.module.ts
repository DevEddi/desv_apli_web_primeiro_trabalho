import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/home/home.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { FooterComponent } from './view/footer/footer.component';
import { SerieComponent } from './serie/serie.component';
import { FilmesComponent } from './filmes/filmes.component';
import { AssistirComponent } from './assistir/assistir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SerieComponent,
    FilmesComponent,
    AssistirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent, FooterComponent]
})
export class AppModule { }
