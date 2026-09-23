import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { producte } from './interficies/producte'; // PER PODER USAR LA interface de TIPUS producte que s'ha d'importar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba1');

  // Veure la diferencia entre JS i TS --> TS = JS + tipus

  // TIPUS BASICS
  nom: string = 'Angular ';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  // ARRAYS TIPATS
  colors: string[] = ['rojo', 'verde', 'azul'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  // TypeScript infereix (adivina) el tipus automàticament
  ciutat = 'Lleida'; // string
  codiP = 25605; // number

  // Objecte de tipus Producte
  producte: producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true,
  };

  producte2: producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    disponible: false,
  };


  productes: producte[] = [];
}
