import { assert, describe, test } from "vitest";
import { CreateProduct, Product } from "../../models";
import { ProductCreatePgRepository } from "./product.create.pg.repository";

describe("Test Product logic", () => {
  //Paso: 1 crear mock de PG
  const mockConnectPg: any = {
    connect: async (): Promise<any> => {
      return {
        query: async (query: string, values: any[]) => {
          return {
            rows: [
              {
                product_create: {
                  id: "001",
                  code: "code1",
                  name: "name1",
                  description: "description1",
                  sort: "sort1",
                  catalogs: [{ id: "c1", type: "PRODUCT-CATEGORY" }],
                },
              },
            ],
          };
        },
      };
    },
  };

  test("Test - Create product", async () => {
    //paso: 2 creo producto
    const create: CreateProduct = {
      id: "001",
      code: "code1",
      name: "name1",
      description: "description1",
      sort: "sort1",
      catalogs: [{ id: "c1", type: "PRODUCT-CATEGORY" }],
    };

    const repository = new ProductCreatePgRepository(mockConnectPg);
    const result = await repository.execute(create);

    assert.equal(result.status, "success");
    assert.equal(result.error, null);
    assert.deepEqual(result.data, create)
  });
});
