import { AritméticaArt } from "../aritmetica.art";

export class RestaArt implements AritméticaArt{
    operationArt(a: number, b: number): number{
        console.log(`Restando ${a} y ${b}`);
        return (a-b)
    }
}
