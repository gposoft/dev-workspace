import { CacheService } from "../../../cache/1.interfaz-alto-nivel/cache.service";
import { Product } from "../../2.abtract-medio-nivel/product/product.model";
import { Reporte } from "../../2.abtract-medio-nivel/report/report.model";
import { GeneradorFinanciero } from "./report.financial";

export class ProxyGeneradorFinanciero implements Reporte<Promise<Product[]>> {
  constructor(private readonly providers: { generadorFinanciero: GeneradorFinanciero, cacheService: CacheService }) {}

  async generarReporte(): Promise<Product[]> {
    const key = "2024-01.ReporteFinanciero";

    let report = this.providers.cacheService.get(key);

    if (!report) {
      report = await this.providers.generadorFinanciero.generarReporte();
      this.providers.cacheService.set(key, report);
      console.log("Se guardo en cache");
    } else {
      console.log("Recuperado de cache");
    }
    return <Product[]>report;
  }
}
