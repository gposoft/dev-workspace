import { Product } from "../2.abtract-medio-nivel/product/product.model";
import { GeneradorFinanciero } from "../3.logic-bajo-nivel/reporte/report.financial";

export class ReportProductFinancialServices {
  constructor(private readonly providers: { generadorFinanciero: GeneradorFinanciero }) {}

  async execute(): Promise<Product[]> {
    return this.providers.generadorFinanciero.generarReporte();
  }
}
