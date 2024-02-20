import { AritméticaArt } from "../aritmetica.art";

export class DividirArt implements AritméticaArt {
  operationArt(a: number, b: number): number {
    console.log(`Dividiendo ${a} y ${b}`);
    return a / b;
  }
}
