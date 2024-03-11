import { Catalog } from "../../../common/models/catalog.models";

export interface ProductDTO {
  id: string;
  code: string;
  catalogs: Catalog[];
}

export interface CreateProductDTO {
  id: string;
  code: string;
  name: string;
  description: string;
  sort: string;

  catalogs: Catalog[];
}
