import { AritmeticStrategy } from "../../context/contextUco.strategy";

export class RestAritmeticStrategy implements AritmeticStrategy {
  generateOperation(a: number, b: number): number {
    console.log(`Calculando la resta de ${a} - ${b}`);
    return a - b;
  }
}
