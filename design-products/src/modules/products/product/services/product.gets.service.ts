import { Result } from "../../../common";
import { Product, ProductGetsRepository } from "../models";


export class ProductGetsService {
    constructor(private readonly providers: { productGetsRepository: ProductGetsRepository }) {}

    async execute(): Promise<Result<Product[]>> {
        return this.providers.productGetsRepository.execute()
    } 

}