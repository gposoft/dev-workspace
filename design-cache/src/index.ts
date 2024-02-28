import * as readline from "readline";
import { ProductGetterRepository } from "./modules/product/2.abtract-medio-nivel/repositories/product.getter.repository";
import { GeneradorFinanciero } from "./modules/product/3.logic-bajo-nivel/reporte/report.financial";
import { ProductGettersRepositoryFile } from "./modules/product/3.logic-bajo-nivel/repositories/file/product.getters.repository.file";
import { CacheRepository } from "./modules/cache/2.abstract-medio-nivel/cache.repository";
import { CacheService } from "./modules/cache/1.interfaz-alto-nivel/cache.service";
import { ProxyGeneradorFinanciero } from "./modules/product/3.logic-bajo-nivel/reporte/report.financial.proxy";
import { ReportProductFinancialProxyServices } from "./modules/product/1.interfaz-alto-nivel/report.financial.proxy.service";
import { providers } from "./setting/providers.setting";
import { Product } from "./modules/product/2.abtract-medio-nivel/product/product.model";
import { ProductObservable } from "./modules/product/3.logic-bajo-nivel/cache/product.observable";
import { ProductSetterRepository } from "./modules/product/2.abtract-medio-nivel/repositories/product.setter.repository";
import { ProductSettersRepositoryFile } from "./modules/product/3.logic-bajo-nivel/repositories/file/product.setters.repository.file";
import { CacheServiceObserver } from "./modules/product/3.logic-bajo-nivel/cache/product.observer";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function processCacheInput(row: number) {
  rl.question("Presiona [ I : Imprimir, M : Modificar, C: Limpiar,  S : Salir ]  luego pulsa Enter: ", async (answer) => {
    row++;

    if (answer.toLowerCase() === "s") {
      console.log("¡Adiós!");
      rl.close();
      return;
    } else if (answer.toLowerCase() === "c") {
      console.clear();
    } else if (answer.toLowerCase() === "i") {
      console.log(`Presionaste la tecla: ${answer}`);
      console.log(`Genera reporte ${row}`);

      const productGettersRepository: ProductGetterRepository = new ProductGettersRepositoryFile();
      const generadorFinanciero = new GeneradorFinanciero({ productGettersRepository });
      const cacheRepository: CacheRepository = providers.CACHE_MEMORY_REPOSITORY(); // new CacheMemoryRepository();
      const cacheService = new CacheService({ cacheRepository });
      const proxyGeneradorFinanciero = new ProxyGeneradorFinanciero({ generadorFinanciero, cacheService });

      const rpt = new ReportProductFinancialProxyServices({ proxyGeneradorFinanciero });
      const info = await rpt.execute();
      console.table(info);

    } else if (answer.toLowerCase() === "m") {

       const update: Product = { id: 20, name: "Producto T", expiration: "2024-02-26", price: 1500.89 };
       const product = new ProductObservable(update);
       const productSettersRepository: ProductSetterRepository = new ProductSettersRepositoryFile();
       const cacheRepository: CacheRepository = providers.CACHE_MEMORY_REPOSITORY(); // new CacheMemoryRepository();
       const cacheService = new CacheService({ cacheRepository });
       const cacheServiceObserver = new CacheServiceObserver({ productSettersRepository, cacheService });

       product.subscribe(cacheServiceObserver);
       product.setPrice(9999);


    }
    processCacheInput(row);
  });
}

async function start() {
  processCacheInput(0);
}
start();

/*
(
    function start() {
        console.log("start....");
    }
)();

(
    ()=> {

    }
)()
*/
