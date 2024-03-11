import { PoolClient, QueryResult } from "pg";
import { Affected, Result } from "../../../../common/models/result.models";
import { UpdateProduct } from "../../models/entity/product.entity";
import { ProductUpdateRepository } from "../../models/repository/product.repository";
import { connectPg } from "../../../../../settings/db.setting";
import { CathResponse } from "../../../../../system/decorators/CatchResponse";

export class ProductUpdatePgRepository implements ProductUpdateRepository {
  async execute(id: string, product: UpdateProduct): Promise<Result<number>> {
    const param = {
      register: product,
    };

    const values = [id, param];
    const query = "SELECT providers.product_update($1,$2)";

    const client: PoolClient = await connectPg.connect();
    let response: Result<Affected>;

    try {
      const result: QueryResult = await client.query(query, values);

      console.log("database:", result.rows[0]);

      response = {
        status: "success",
        data: result.rowCount ? result.rowCount : 0,
        error: null,
      };
    } catch (error: any) {
      response = {
        status: "error",
        data: 0,
        error: error.message,
      };
    }

    return response;
  }

  /*
  
  @CathResponse()
  async execute(id: string, product: UpdateProduct): Promise<Result<number>> {
    const param = { register: product };

    const values = [id, param];
    const query = "SELECT providers.product_update($1,$2)";

    const client: PoolClient = await connectPg.connect();
    let response: Result<Affected>;

    const result: QueryResult = await client.query(query, values);
    response = {
      status: "success",
      data: result.rowCount ? result.rowCount : 0,
      error: null,
    };

    return response;
  }

  */
}
