import { Pool } from "pg";
import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import { ProductCreatePgRepository } from "./product.create.pg.repository";
import { release } from "os";
import { CreateProduct } from "../../models";
import { ProductTestFactory } from "../../../core/tests/product.test.factory";

interface MockPool extends Partial<Pool> {
  connect: () => Promise<any>;
}

describe("Valida sql...", () => {
  let pool: MockPool;
  let client: any;
  let repository: ProductCreatePgRepository;

  beforeEach(() => {
    client = {
      query: vi.fn(),
      release: vi.fn(),
    };
    pool = {
      connect: vi.fn().mockResolvedValue(client),
    };
    repository = new ProductCreatePgRepository(pool as Pool);
  });

  it("Test - Sql", async () => {
    const spy = vi.spyOn(client, "query");
    const product:CreateProduct = ProductTestFactory.getCreateProduct({})
    const result = await repository.execute(product)
    expect(spy).toHaveBeenCalledWith("SELECT providers.product_create($1)", [{register: product}]);
  });


});
