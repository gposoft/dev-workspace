import { Result } from "../../../common";
import { CreateProduct, Product, ProductCreateRepository } from "../models";

export class ProductCreateService {
  constructor(private readonly providers: { productCreateRepository: ProductCreateRepository }) {}

  async execute(product: CreateProduct): Promise<Result<Product | null>> {
    return this.providers.productCreateRepository.execute(product);
  }
}
