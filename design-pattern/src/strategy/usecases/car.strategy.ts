import { RouteStrategy } from "../context/context.strategy";

export class CarRouteStrategy implements RouteStrategy {
  generateRoute(start: string, end: string): string[] {
    console.log(`Generando ruta en coche ${start} hasta ${end}`);
    return ["Paso 1: Conducir por carretera principal", "Paso 2: Girar a la derecha", "Paso 3: Llegar al destino"];
  }
}
