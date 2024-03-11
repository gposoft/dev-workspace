import { PoolClient, QueryResult } from "pg";
import { Result } from "../../../../common/models/result.models";
import { CreateProduct, Product } from "../../models/entity/product.entity";
import { ProductCreateRepository } from "../../models/repository/product.repository";
import { connectPg } from "../../../../../settings/db.setting";
import { response } from "../../../../../system/tools/response.result";

export class ProductCreatePgRepository implements ProductCreateRepository {

  async execute(product: CreateProduct): Promise<Result<Product | null>> {
    const param = {
      register: product,
    };

    const values = [param];
    const query = "SELECT providers.product_create($1)";

    const client: PoolClient = await connectPg.connect();
    let response: Result<Product | null>;

    try {
      const result: QueryResult = await client.query(query, values);
      const dataset = result.rows.map(({ product_create: row }) => <Product>row);

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

/*
  async execute(product: Product): Promise<Result<Product | null>> {
    const param = {register: product,};
    const values = [param];
    const query = "SELECT providers.product_create($1)";
    const client: PoolClient = await connectPg.connect();

    const process = async () => {
      let resp: Result<Product | null>;
      const result: QueryResult = await client.query(query, values);
      const dataset = result.rows.map(({ product_create: row }) => <Product>row);

      resp = {
        status: "success",
        data: dataset[0],
        error: null,
      };
      return resp;
    };

    return await response(process);
  }
  */
