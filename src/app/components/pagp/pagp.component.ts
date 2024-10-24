import { Component } from '@angular/core';
import { PagpService } from '../../services/pagp.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagp.component.html',
  styleUrl: './pagp.component.css'
})
export class PagpComponent {

  peliculas: any[] = [];
  peliculasFiltradas: any[] = [];
  valoracionMinima: number = 0;

  constructor(private servicio: PagpService) {}

  ngOnInit() {
    this.servicio.getPelis().subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response);
        this.peliculas = response.peliculas || [];
        this.peliculasFiltradas = this.peliculas;
        console.log('Películas iniciales:', this.peliculas);
      },
      error => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  filtrarPeliculas() {
    if (this.valoracionMinima < 0) this.valoracionMinima = 0;
    if (this.valoracionMinima > 10) this.valoracionMinima = 10;

    console.log('Valoración mínima seleccionada:', this.valoracionMinima);
    this.peliculasFiltradas = this.peliculas.filter((pelicula: any) => {
      console.log(`Película: ${pelicula.titulo}, Valoración: ${pelicula.valoracion}`);
      return pelicula.valoracion >= this.valoracionMinima;
    });
    console.log('Películas filtradas:', this.peliculasFiltradas);
  }
}
