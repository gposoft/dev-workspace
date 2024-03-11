import { Result } from "../../../common/models/result.models";
import { CreateProductDTO, ProductDTO } from "../models/product.core.dto";

export interface ProductServiceCore {
    execute(product:CreateProductDTO) : Promise<Result<ProductDTO | null>>
}