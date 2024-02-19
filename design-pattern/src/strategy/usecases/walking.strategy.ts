import { RouteStrategy } from "../context/context.strategy";

export class WalkingRouteStrategy implements RouteStrategy {
  generateRoute(start: string, end: string): string[] {
    console.log(`Generando ruta a pie ${start} hasta ${end}`);
    return ["Paso 1: Caminar por calles peatonales", "Paso 2: Cruzar la plaza", "Paso 3: Llegar al destino"];
  }
}
