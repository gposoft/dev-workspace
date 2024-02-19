export interface RouteStrategy {
  generateRoute(start: string, end: string): string[];
}

export class RoutePlannerStrategy {
  private routeStrategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.routeStrategy = strategy;
  }

  setStrategy(strategy: RouteStrategy) {
    this.routeStrategy = strategy;
  }

  generateRoute(start: string, end: string): string[] {
    return this.routeStrategy.generateRoute(start, end);
  }
}