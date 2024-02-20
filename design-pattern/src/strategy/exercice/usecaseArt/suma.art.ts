import { AritméticaArt } from "../aritmetica.art";

export class SumaArt implements AritméticaArt{
    operationArt(a: number, b: number): number{
        console.log(`Sumando ${a} y ${b}`);
        return (a+b)
    }
}
