import { CacheService } from "../../../cache/1.interfaz-alto-nivel/cache.service";
import { Observer } from "../../../shared/models/observer.model";
import { Product } from "../../2.abtract-medio-nivel/product/product.model";
import { ProductSetterRepository } from "../../2.abtract-medio-nivel/repositories/product.setter.repository";


export class CacheServiceObserver implements Observer<Product> {
  constructor(private readonly providers: { productSettersRepository: ProductSetterRepository; cacheService: CacheService }) {}

  update(product: Product): void {
    const key = "2024-01.ReporteFinanciero";
    
    const products: Product[] = this.providers.cacheService.get(key);
    const result = products.map((item) => {
      if (item.id === product.id) {
        return <Product>{ id: product.id, name: product.name, expiration: product.expiration, price: product.price };
      }
      return item;
    });

    this.providers.productSettersRepository.setData(result);
    this.providers.cacheService.remove(key);
  }
}
