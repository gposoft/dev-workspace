import { CreateProduct, Product, UpdateProduct } from "..";
import { Affected, Result } from "../../../../common";


export interface ProductCreateRepository {
  execute(product: CreateProduct): Promise<Result<Product | null>>;
}

export interface ProductUpdateRepository {
  execute(id: string, product: UpdateProduct): Promise<Result<Affected>>;
}

export interface ProductDeleteRepository {
  execute(id: string): Promise<Result<Affected>>;
}

export interface ProductGetsRepository {
  execute(): Promise<Result<Product[]>>;
}

export interface ProductGetByIdRepository {
  execute(id: string): Promise<Result<Product | null>>;
}
