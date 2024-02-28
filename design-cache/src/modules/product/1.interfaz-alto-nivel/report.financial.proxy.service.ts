import { Product } from "../2.abtract-medio-nivel/product/product.model";
import { ProxyGeneradorFinanciero } from "../3.logic-bajo-nivel/reporte/report.financial.proxy";


export class ReportProductFinancialProxyServices {
  constructor(private readonly providers: { proxyGeneradorFinanciero: ProxyGeneradorFinanciero }) {}

  async execute(): Promise<Product[]> {
    return this.providers.proxyGeneradorFinanciero.generarReporte()
  }
}