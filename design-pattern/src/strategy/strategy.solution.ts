import { BusTransportRouteStrategy, CarRouteStrategy, CyclingRouteStrategy, RoutePlannerStrategy, WalkingRouteStrategy } from ".";


export const clientStrategy = () => {
  const carRoute = new RoutePlannerStrategy(new CarRouteStrategy());
  carRoute.generateRoute("inicio", "fin");

  const walkingRoute = new RoutePlannerStrategy(new WalkingRouteStrategy());
  walkingRoute.generateRoute("inicio", "fin");

  const busRoute = new RoutePlannerStrategy(new BusTransportRouteStrategy());
  busRoute.generateRoute("inicio", "fin");

  const cyclingRoute = new RoutePlannerStrategy(new CyclingRouteStrategy());
  cyclingRoute.generateRoute("inicio", "fin");
};


