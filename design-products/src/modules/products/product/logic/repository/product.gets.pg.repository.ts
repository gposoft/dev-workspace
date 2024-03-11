import { PoolClient, QueryResult } from "pg";
import { Result } from "../../../../common/models/result.models";
import { Product } from "../../models/entity/product.entity";
import { ProductGetsRepository } from "../../models/repository/product.repository";
import { connectPg } from "../../../../../settings/db.setting";

export class ProductGetsPgRepository implements ProductGetsRepository {
  async execute(): Promise<Result<Product[]>> {
    const query = "SELECT * from providers.product_gets()";
    const client: PoolClient = await connectPg.connect();

    let response: Result<Product[]>;

    try {
      const result: QueryResult = await client.query(query);
      const dataset = result.rows.map((row) => <Product>row);

      response = {
        status: "success",
        data: dataset,
        error: null,
      };
    } catch (error: any) {
        let message = error.message;
        
        response = {
          status: "error",
          data: [],
          error: message,
        };
    }

    return response;
  }
}
