import { Product } from "../product/product.model";

export interface ProductSetterRepository {
  setData(products: Product[]): void;
}
