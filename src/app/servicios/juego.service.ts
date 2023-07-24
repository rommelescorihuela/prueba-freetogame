// app/servicios/juego.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego.interface';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  private baseUrl = 'https://www.freetogame.com/api/';

  constructor(private http: HttpClient) {}

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${this.baseUrl}/games`);
    console.log('hola')
  }

  getJuegoById(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.baseUrl}/game?id=${id}`);
  }
}
