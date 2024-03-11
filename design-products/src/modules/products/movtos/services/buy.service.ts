import { Result } from "../../../common/models/result.models";
import { CreateProductDTO } from "../../core/models/product.core.dto";
import { ProductServiceCore } from "../../core/services/product.core.service";
import { BuyMovto, BuySummary } from "../models/entity/buy.entity";
import { CreateMovto } from "../models/entity/movto.entity";
import { MovtoCreateRepository } from "../models/repository/movto.repository";

export class BuyService {
  constructor(private readonly providers: { productServiceCore: ProductServiceCore; movtoCreateRepository: MovtoCreateRepository }) {}

  async execute(buy: BuyMovto): Promise<Result<BuySummary>> {
    //PASO: 1 CREAR PRODUCTO
    const product: CreateProductDTO = { ...buy.product };
    const resultProduct = await this.providers.productServiceCore.execute(product);

    //PASO: 2 CREAR MOVTO:
    const movto: CreateMovto = { ...buy.movto, operation: "E" };
    const resultMovto = await this.providers.movtoCreateRepository.execute(resultProduct.data?.id!, movto);
    return {
      status: "success",
      error: null,
      data: {
        product: {
          id: resultProduct.data?.id!,
          code: resultProduct.data?.code!,
          catalogs: resultProduct.data?.catalogs!
        }, 
        movto: {
          id: resultMovto.data?.id!,
          price: movto.price,
        },
      },
    };
  }
}
