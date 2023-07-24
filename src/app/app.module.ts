import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';
import { FiltroJuegosComponent } from './componentes/filtro-juegos/filtro-juegos.component';
import { DetalleJuegoComponent } from './componentes/detalle-juego/detalle-juego.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    FiltroJuegosComponent,
    DetalleJuegoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
