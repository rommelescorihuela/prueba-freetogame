// app/componentes/filtro-juegos/filtro-juegos.component.ts
import { Component, OnInit } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JuegoService } from '../../servicios/juego.service';

@Component({
  selector: 'app-filtro-juegos',
  templateUrl: './filtro-juegos.component.html',
  styleUrls: ['./filtro-juegos.component.css'],
})
export class FiltroJuegosComponent implements OnInit {
  juegos: Juego[] = [];
  juegosFiltrados: Juego[] = [];
  generos: string[] = [];
  plataformas: string[] = [];
  nombreJuego: string = '';
  generoJuego: string = '';
  plataformaJuego: string = '';

  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    this.juegoService.getJuegos().subscribe((juegos) => {
      this.juegos = juegos;
      this.juegosFiltrados = juegos;
      this.generos = Array.from(new Set(juegos.map((juego) => juego.genre)));
      this.plataformas = Array.from(new Set(juegos.map((juego) => juego.platform)));
    });
  }

  filtrarJuegos() {
    this.juegosFiltrados = this.juegos.filter((juego) => {
      let cumpleFiltro = true;
      if (this.nombreJuego) {
        cumpleFiltro = cumpleFiltro && juego.title.toLowerCase().includes(this.nombreJuego.toLowerCase());
      }
      if (this.generoJuego) {
        cumpleFiltro = cumpleFiltro && juego.genre.toLowerCase() === this.generoJuego.toLowerCase();
      }
      if (this.plataformaJuego) {
        cumpleFiltro = cumpleFiltro && juego.platform.toLowerCase() === this.plataformaJuego.toLowerCase();
      }
      return cumpleFiltro;
    });
  }
}
