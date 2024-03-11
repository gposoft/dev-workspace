import { Result } from "../../../common/models/result.models";
import { MovtoCreatePgRepository } from "../logic/movto.create.pg.repository";
import { CreateMovto, Movto } from "../models/entity/movto.entity";

export class MovtoCreateService {
  constructor(private readonly providers: { movtoCreateRepository: MovtoCreatePgRepository }) {}

  async execute(product_id: string, movto: CreateMovto): Promise<Result<Movto | null>> {
    if(!movto.sort) {
       movto.sort = "A"; 
    } 

    return this.providers.movtoCreateRepository.execute(product_id, movto);
  }
}