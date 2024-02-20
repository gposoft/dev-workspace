export interface AritméticaArt {
  operationArt(a: number, b: number): number;
}

export class AritmeticaPlanner {
    private aritmeticaArt: AritméticaArt;

    constructor(aritmetica:AritméticaArt){
        this.aritmeticaArt = aritmetica;
    }

    setAritmetica(aritmetica:AritméticaArt){
        this.aritmeticaArt = aritmetica;
    }

    operationArt(a: number, b: number): number {
        return this.aritmeticaArt.operationArt(a,b);
    }
}