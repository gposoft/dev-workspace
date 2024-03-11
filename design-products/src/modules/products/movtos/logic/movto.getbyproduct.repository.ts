import { PoolClient, QueryResult } from "pg";
import { Result } from "../../../common/models/result.models";
import { Movto } from "../models/entity/movto.entity";
import { MovtoGetByProductRepository } from "../models/repository/movto.repository";
import { connectPg } from "../../../../settings/db.setting";

export class MovtoGetByProductsPgRepository implements MovtoGetByProductRepository {
  async execute(product_id: string): Promise<Result<Movto[]>> {
    const values = [product_id];
    const query = "SELECT * from providers.product_movto_get_by_product($1)";
    const client: PoolClient = await connectPg.connect();

    let response: Result<Movto[]>;

    try {
      const result: QueryResult = await client.query(query, values);
      const dataset = result.rows.map((row) => <Movto>row);

      response = {
        status: "success",
        data: dataset,
        error: null,
      };
    } catch (error: any) {
      response = {
        status: "error",
        data: [],
        error: error.message,
      };
    }

    return response;
  }
}
