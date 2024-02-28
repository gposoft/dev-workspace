import { Product } from "../product/product.model";

export interface ProductGetterRepository {
  getData(): Product[];
}
