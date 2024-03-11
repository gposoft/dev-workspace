import { Catalog } from "../../../../common/models/catalog.models";

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  sort: string;

  catalogs: Catalog[];
}

export interface CreateProduct {
  id: string;
  code: string;
  name: string;
  description: string;
  sort: string;

  catalogs: Catalog[];
}

export interface UpdateProduct {
  code?: string;
  name?: string;

  description?: string;
  sort?: string;

  catalogs?: Catalog[];
}
