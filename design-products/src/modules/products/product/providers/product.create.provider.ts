import { Result } from "../../../common";
import { CreateProductDTO, ProductDTO, ProductServiceCore } from "../../core";
import { CreateProduct, ProductCreateRepository } from "../models";


export class ProductCreateProvider implements ProductServiceCore {
  constructor(private readonly providers: { productCreateRepository: ProductCreateRepository }) {}

  async execute(product: CreateProductDTO): Promise<Result<ProductDTO | null>> {
    const register: CreateProduct = { ...product };
    const result = await this.providers.productCreateRepository.execute(register);

    if(result.status === "error") {
      return {
        status: "success",
        data:{
          id: product.id, 
          code: product.code,
          catalogs: product.catalogs,
        },
        error: result.error
      }
    }

    return {
      status: "success",
      data: {
        id: result.data?.id!,
        code: result.data?.code!,
        catalogs: result.data?.catalogs!
      },
      error: null,
    };
  }
}
