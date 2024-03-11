import { Result } from "../../../common";
import { Product, ProductGetByIdRepository } from "../models";


export class ProductGetByIdService {
    constructor(private readonly providers: { productGetByIdRepository: ProductGetByIdRepository }) {}

    async execute(id:string): Promise<Result<Product | null>> {
        //Lógica de validaciones
        return this.providers.productGetByIdRepository.execute(id);
    } 

}