import { Catalog } from "../../../../common/models/catalog.models";

export interface BuyMovto {
  product: {
    id: string;
    code: string;
    name: string;
    description: string;
    sort: string;
    catalogs: Catalog[];
  };
  movto: {
    quantity: number;
    price: number;
    description: string;
    sort?: string;
  };
}


export interface BuySummary {
  product: {
    id: string;
    code: string;
    catalogs: Catalog[];
  };
  movto: {
    id: string;
    price: number;
  };
}
