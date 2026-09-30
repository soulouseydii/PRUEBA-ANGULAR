export class jugadors {

    // 2 propietats tipades
    nom: string;
    edat: number;

    // constructor amb almenys 1 paràmetre
    constructor(nom: string, edat: number) {
        this.nom = nom;
        this.edat = edat;
    }

    // mètodes amb parametres i retorn tipat
    presentacio(dorsal: number): string {
        return `Amb el dorsal ${dorsal} el jugador ${this.nom}`;
    }


    edadLimitPerJugar(edatLimit: number): boolean {
      return this.edat >= edatLimit;
    }


    // getter
    getEdat(): number {
        return this.edat;
    }    

}