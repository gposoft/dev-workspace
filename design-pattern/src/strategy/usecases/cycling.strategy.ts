import { RouteStrategy } from "../context/context.strategy";

export class CyclingRouteStrategy implements RouteStrategy {
  generateRoute(start: string, end: string): string[] {
    console.log(`Generando ruta en bicicleta ${start} hasta ${end}`);
    return ["Paso 1: Pedalear por carriles para bicicletas", "Paso 2: Cruzar el puente en bicicleta", "Paso 3: Llegar al destino"];
  }
}
