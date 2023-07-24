// app/componentes/lista-juegos/lista-juegos.component.ts
import { Component, OnInit } from '@angular/core';
import { Juego } from '../../interfaces/juego.interface';
import { JuegoService } from '../../servicios/juego.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css'],
})
export class ListaJuegosComponent implements OnInit {
  juegos: Juego[] = [];

  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    this.juegoService.getJuegos().subscribe((juegos) => {
      this.juegos = juegos;
    });
  }
}
