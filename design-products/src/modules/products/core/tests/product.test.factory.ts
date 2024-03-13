import { Catalog } from "../../../common/models/catalog.models";
import { CreateProduct, Product } from "../../product/models";

export class ProductTestFactory {
  static getProduct({ id = "1", code = "code1", name = "name1", description = "description1", sort = "sort1", catalogs = [{ id: "C!", type: "PRODUCT-CATEGORY" }] }): Product {
    return {
      id,
      code,
      name,
      description,
      sort,
      catalogs: catalogs as Catalog[],
    };
  }

  static getCreateProduct({
    id = "1",
    code = "code1",
    name = "name1",
    description = "description1",
    sort = "sort1",
    catalogs = [{ id: "C!", type: "PRODUCT-CATEGORY" }],
  }): CreateProduct {
    return {
      id,
      code,
      name,
      description,
      sort,
      catalogs: catalogs as Catalog[],
    };
  }
}
