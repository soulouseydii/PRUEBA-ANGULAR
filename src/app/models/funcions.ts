export class funcions{

    nom: string;
    edat: number;

    constructor(nom: string, edat: number) {
        this.nom = nom;
        this.edat = edat;
    }


    saludar(nom: string): string {
        return `Hola ${nom}`;
    }

    esMajorEdat(edat:number): boolean {
        return edat >= 18;
    }

    sumarArray(nums: number[]): number {
        let suma = 0;
        for (let i = 0; i < nums.length; i++) {
            suma += nums[i];
        }
        return suma;        
    }
     
}

