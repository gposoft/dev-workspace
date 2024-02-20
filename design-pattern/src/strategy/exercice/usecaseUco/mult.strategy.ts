import { AritmeticStrategy } from "../../context/contextUco.strategy";

export class MultAritmeticStrategy implements AritmeticStrategy {
  generateOperation(a: number, b: number): number {
    console.log(`Calculando la multiplicación de ${a} * ${b}`);
    return a * b;
  }
}
