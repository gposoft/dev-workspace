import * as fs from "fs";
import { Product } from "../../../2.abtract-medio-nivel/product/product.model";
import { ProductSetterRepository } from "../../../2.abtract-medio-nivel/repositories/product.setter.repository";

export class ProductSettersRepositoryFile implements ProductSetterRepository {

  setData(products: Product[]) {
    const filePath = "src/dataset/products.json";
    const updatedJson = JSON.stringify(products, null, 2);
    fs.writeFileSync(filePath, updatedJson, "utf8");
  }
  
}
