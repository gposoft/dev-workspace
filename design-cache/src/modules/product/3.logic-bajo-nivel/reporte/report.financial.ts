import { wait } from "../../../shared/wait.service";
import { Product } from "../../2.abtract-medio-nivel/product/product.model";
import { Reporte } from "../../2.abtract-medio-nivel/report/report.model";
import { ProductGetterRepository } from "../../2.abtract-medio-nivel/repositories/product.getter.repository";

export class GeneradorFinanciero implements Reporte<Promise<Product[]>> {
    
  constructor(private readonly providers: { productGettersRepository: ProductGetterRepository }) {}

  async generarReporte(): Promise<Product[]> {
    const seconds = 10;
    console.log(`Generando reporte financiero... (Simulación de ${seconds} segundos)`);
    await wait(seconds);
    return this.providers.productGettersRepository.getData();
  }
}
