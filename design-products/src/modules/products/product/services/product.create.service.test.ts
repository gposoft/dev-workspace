import { assert, describe, test } from "vitest";
import { CreateProduct, Product } from "../models";
import { Result } from "../../../common";
import { ProductCreateService } from "./product.create.service";
import { ProductTestFactory } from "../../core/tests/product.test.factory";



describe("Test - ProductServices", () => {
  test("Test - CreateProduct", async () => {
    //PASO:1 CREAR UN MOCK DE IMPLEMENTACIÓN DE REPOSITORIO
    const mockProductCreateRepository = {
      execute: async (product: CreateProduct): Promise<Result<Product | null>> => {
        return {
          status: "success",
          data: product,
          error: null,
        };
      },
    };

    //PASO:2 INYECTE EL MOCK

    const productService = new ProductCreateService({ productCreateRepository: mockProductCreateRepository });

    //PASO:3 CREA EL OBJETO ESPERADO
    const expected: Result<Product | null> = {
      status: "success",
      data: ProductTestFactory.getProduct({ id: "x111" }),
      error: null,
    };

    //PASO:4 CREO LOS DATOS DEL PRODUCTO
    const create: CreateProduct = ProductTestFactory.getCreateProduct({ id: "x111" });

    //PASO:5 PRUEBO LA FUNCIONALIDAD CONCEPTUAL
    const result = await productService.execute(create);

    //PASO:6 COMPARO RESULTADOS
    // forma 1
    /*
    assert.equal(result.status, "success");
    assert.deepEqual(result.data, expected.data);
    assert.equal(result.error, null)
    */

    // forma 2
    assert.deepEqual(result, expected);
  });
});
