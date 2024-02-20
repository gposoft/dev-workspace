import { AritméticaArt } from "../aritmetica.art";

export class MultiplicarArt implements AritméticaArt {
  operationArt(a: number, b: number): number {
    console.log(`Multiplicando ${a} y ${b}`);
    return a * b;
  }
}
