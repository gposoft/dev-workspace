import * as fs from "fs";
import { Product } from "../../../2.abtract-medio-nivel/product/product.model";
import { ProductGetterRepository } from "../../../2.abtract-medio-nivel/repositories/product.getter.repository";

export class ProductGettersRepositoryFile implements ProductGetterRepository {
  getData(): Product[] {
    const filePath = "src/dataset/products.json";
    const jsonContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonContent);
    return data;
  }
}
