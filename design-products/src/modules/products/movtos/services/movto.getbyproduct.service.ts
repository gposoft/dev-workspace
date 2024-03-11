import { Result } from "../../../common/models/result.models";
import { MovtoCreatePgRepository } from "../logic/movto.create.pg.repository";
import { CreateMovto, Movto } from "../models/entity/movto.entity";
import { MovtoGetByProductRepository } from "../models/repository/movto.repository";

export class MovtoGetByProductsService {
  constructor(private readonly providers: { movtoGetByProductRepository: MovtoGetByProductRepository }) {}

  async execute(product_id: string): Promise<Result<Movto[]>> {
    return this.providers.movtoGetByProductRepository.execute(product_id);
  }
}