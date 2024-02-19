import { RouteStrategy } from "../context/context.strategy";

export class BusTransportRouteStrategy implements RouteStrategy {
  generateRoute(start: string, end: string): string[] {
    console.log(`Generando ruta en autobús ${start} hasta ${end}`);
    return ["Paso 1: Tomar el autobús", "Paso 2: Hacer transbordo en la estación central", "Paso 3: Llegar al destino"];
  }
}
