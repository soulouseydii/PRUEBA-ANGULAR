export class Alumne {
    nom: string;
    edat: number;
    cicle: string;
    notes: number[];

    constructor(nom: string, edat: number, cicle: string, notes: number[]) {
        this.nom = nom;
        this.edat = edat;
        this.cicle = cicle;
        this.notes = notes;
    }


    // mètode presentar

    presentar(): string {
        return `Sóc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}.`;
    }

    // getter mitjana de notes

    getMitjanaNotes(): number {
        let sumaNotes = 0;
        for (let i = 0; i < this.notes.length; i++) {
            sumaNotes += this.notes[i];
        }
        return sumaNotes / this.notes.length;
    }

   // getter aprobat

   gethaAprobat(): boolean{
    return this.getMitjanaNotes() >= 5;
   }

}