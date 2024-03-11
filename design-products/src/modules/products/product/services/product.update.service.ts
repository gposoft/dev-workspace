import { Affected, Result } from "../../../common";
import { ProductUpdateRepository, UpdateProduct } from "../models";

export class ProductUpdateService {
  constructor(private readonly providers: { productUpdateRepository: ProductUpdateRepository }) {}

  async execute(id: string, product: UpdateProduct): Promise<Result<Affected>> {
    return this.providers.productUpdateRepository.execute(id, product);
  }
}
