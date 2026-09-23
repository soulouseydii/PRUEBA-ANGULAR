//  Una interficie defineix l'estructura d'un objecte
// QUALSEVOL OBJECTE de tipus Producte ha de tenir aquests camps 

export interface producte {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    descripcio ?: string; // ? vol dir que es un camp opcional
}


