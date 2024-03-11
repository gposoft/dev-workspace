import { PoolClient, QueryResult } from "pg";
import { Result } from "../../../common/models/result.models";
import { CreateMovto, Movto } from "../models/entity/movto.entity";
import { MovtoCreateRepository } from "../models/repository/movto.repository";
import { connectPg } from "../../../../settings/db.setting";

export class MovtoCreatePgRepository implements MovtoCreateRepository {
  async execute(product_id: string, movto: CreateMovto): Promise<Result<Movto | null>> {
    const param = {
      register: movto,
    };

    const values = [product_id, param];
    const query = "SELECT providers.product_movto_create($1,$2)";
    const client: PoolClient = await connectPg.connect();

    let response: Result<Movto | null>;

    try {
      const result: QueryResult = await client.query(query, values);
      const dataset = result.rows.map(({ product_movto_create: row }) => <Movto>row);

      response = {
        status: "success",
        data: dataset[0],
        error: null,
      };
    } catch (error: any) {
      response = {
        status: "error",
        data: null,
        error: error.message,
      };
    }

    return response;
  }
}
