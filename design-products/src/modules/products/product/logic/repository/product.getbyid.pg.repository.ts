import { PoolClient, QueryResult } from "pg";
import { Result } from "../../../../common/models/result.models";
import { Product } from "../../models/entity/product.entity";
import { ProductGetByIdRepository, ProductGetsRepository } from "../../models/repository/product.repository";
import { connectPg } from "../../../../../settings/db.setting";

export class ProductGetByIdPgRepository implements ProductGetByIdRepository {
  
  async execute(id:string): Promise<Result<Product | null>> {

    const values= [id]
    const query = "SELECT * from providers.product_get_by_id($1)";
    const client: PoolClient = await connectPg.connect();

    let response: Result<Product | null>;

    try {
      const result: QueryResult = await client.query(query, values);
      const dataset = result.rows.map((row) => <Product>row);

      response = {
        status: "success",
        data: dataset[0],
        error: null,
      };
    } catch (error: any) {
        let message = error.message;
        
        response = {
          status: "error",
          data: null,
          error: message,
        };
    }

    return response;
  }
}
