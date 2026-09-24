import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interficies/Producte'; // PER PODER USAR LA interface de TIPUS producte que s'ha d'importar
import { producte as ProducteClass } from './producte'; // IMPORTEM LA CLASSE PRODUCTE 

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
  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true,
  };

  producte2: Producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    disponible: false,
  };


  productes: Producte[] = [this.producte, this.producte2]; 

  p1 = new ProducteClass('Teclat', 89.99);
  
// 1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu.
// 2. MÈTODE descompte() que retorni el preu amb un descompte del 10% (preu * 0.9)
// 3. creeu un nou producte i mostreu el descompte per consola
// 4. cerqueu la manera de mostrar el descompte amb un popup



p2 = new ProducteClass('Airpods', 249.99);


  constructor() {
    console.log(this.p1.toSting());
    console.log(this.p1.preuAmbIva);
    console.log(this.p2.toSting());
    console.log(this.p2.descompte());
  } 



}