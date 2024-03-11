import { Result } from "../../../../common/models/result.models";
import { CreateMovto, Movto, UpdateMovto } from "../entity/movto.entity";

export interface MovtoCreateRepository {
  execute(product_id: string, movto: CreateMovto): Promise<Result<Movto | null>>;
}

export interface MovtoUpdateRepository {
  execute(id:string, movto: UpdateMovto): Promise<Result<Movto | null>>;
}

export interface MovtoGetByProductRepository {
  execute(product_id: string): Promise<Result<Movto[]>>;
}

export interface MovtoGetByIdRepository {
  execute(id:string): Promise<Result<Movto | null>>;
}
