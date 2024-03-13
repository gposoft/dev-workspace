import { assert, describe, test } from "vitest";
import { CreateProduct, Product } from "../../models";
import { ProductCreatePgRepository } from "./product.create.pg.repository";
import { ProductTestFactory } from "../../../core/tests/product.test.factory";

describe("Test Product logic", () => {
  //Paso: 1 crear mock de PG
  const mockConnectPg: any = {
    connect: async (): Promise<any> => {
      return {
        query: async (query: string, values: any[]) => {
          return {
            rows: [
              {
                product_create: ProductTestFactory.getProduct({}),
              },
            ],
          };
        },
      };
    },
  };

  const mockConnectPgError: any = {
    connect: async (): Promise<any> => {
      return {
        query: async (query: string, values: any[]) => {
          throw new Error("llave duplicada");
        },
      };
    },
  };

  test("Test - Create product", async () => {
    //paso: 2 creo producto
    const create: CreateProduct = ProductTestFactory.getCreateProduct({});

    const repository = new ProductCreatePgRepository(mockConnectPg);
    const result = await repository.execute(create);

    assert.equal(result.status, "success");
    assert.equal(result.error, null);
    assert.deepEqual(result.data, create);
  });

  test("Test - Create product -> Espero un error", async () => {
    const create: CreateProduct = ProductTestFactory.getCreateProduct({});

    const repository = new ProductCreatePgRepository(mockConnectPgError);
    const result = await repository.execute(create);

     assert.equal(result.status, "error");
     assert.equal(result.error, "llave duplicada", "Es correcto");
     assert.equal(result.data, null)
  });
});
