import { AritmeticStrategy } from "../../context/contextUco.strategy";

export class SumAritmeticStrategy implements AritmeticStrategy {
  generateOperation(a: number, b: number): number {
    console.log(`Calculando la suma de ${a} + ${b}`);
    return a + b;
  }
}
