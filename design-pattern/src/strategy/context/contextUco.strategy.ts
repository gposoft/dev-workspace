export interface AritmeticStrategy {
  generateOperation(a: number, b: number): number;
}

export class AritmeticPlannerStrategy {
  private aritmeticStrategy: AritmeticStrategy;

  constructor(strategy: AritmeticStrategy) {
    this.aritmeticStrategy = strategy;
  }

  setStrategy(strategy: AritmeticStrategy) {
    this.aritmeticStrategy = strategy;
  }

  generateOperation(a: number, b: number): number {
    return this.aritmeticStrategy.generateOperation(a, b);
  }
}
