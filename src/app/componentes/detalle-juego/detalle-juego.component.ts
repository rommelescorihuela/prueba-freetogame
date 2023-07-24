// app/componentes/detalle-juego/detalle-juego.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '../../interfaces/juego.interface';
import { JuegoService } from '../../servicios/juego.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css'],
})
export class DetalleJuegoComponent implements OnInit {
  juego: Juego | undefined;

  constructor(private location: Location, private route: ActivatedRoute, private juegoService: JuegoService) {}

  ngOnInit() {
    const juegoId = this.route.snapshot.params['id'];
    this.juegoService.getJuegoById(juegoId).subscribe((juego) => {
      this.juego = juego;
    });
  }

  volver(){
    this.location.back();
  }
}
