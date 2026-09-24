// Primera classe
export class producte {
    nom: string;
    preu: number;


    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    // mètode normal 

    toSting(): string {
        return `${this.nom} - ${this.preu}€`;
    }
 
    // getters i setters
    get preuAmbIva() : number {
        return this.preu * 1.21;
    }


    // mètode descripcio()

    descripcio(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    // mètode descompte()

    descompte(): number {
        return this.preu * 0.9;
    }

    
    


}