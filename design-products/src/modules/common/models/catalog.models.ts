export interface Catalog {
  id: string;
  type: "PRODUCT-CATEGORY" | "PRODUCT-FAMILY";
  code?: string;
  name?: string;
}
