import { AritmeticStrategy } from "../../context/contextUco.strategy";

export class DivAritmeticStrategy implements AritmeticStrategy {
  generateOperation(a: number, b: number): number {
    let result : number
    console.log(`Calculando la división de ${a} / ${b}`);
    if (b === 0){
        result = 0
    }else{
        result = a / b
    }
    return result
  }
}