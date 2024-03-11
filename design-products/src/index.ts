import { MovtoInjection } from "./modules/products/movtos/dependencies/movto.dependence";
import { BuyMovto } from "./modules/products/movtos/models/entity/buy.entity";
import { ProductInjection } from "./modules/products/product/dependencies/product.dependencies";
import { CreateProduct } from "./modules/products/product/models/entity/product.entity";

/*
const main = async () => {
  const createService = ProductInjection.create();

  const product: CreateProduct = {
    id: "001",
    code: "P01",
    name: "Camisa",
    description: "",
    sort: "1",
  };

  const result = await createService.execute(product);
  if (result.status === "success") {
    console.log("Se guardo el registro:", result.data);
  } else {
    console.log("Se encontro un error:", result.error);
    const updateService = ProductInjection.update();
    const resultUpdate = await updateService.execute("001", { name: "Implementado decorador...!" });
    console.log("Afectaciones:", resultUpdate.data);
  }

  const getsProduct = await ProductInjection.gets();
  const resultGets = await getsProduct.execute();

  console.table(resultGets.data);

  const getProduct = await ProductInjection.get();
  const resultGetById = await getProduct.execute("001");

  console.log(`id ${"001"}`);
  console.table(resultGetById.data);
};
*/

const main = async () => {
  /*
"catalog_id"	"type"	"code"	"name"	"description"	"sort"
"PC-1"	"PRODUCT-CATEGORY"	"1"	"Alimentos"	"Productos"	"1"
"PC-2"	"PRODUCT-CATEGORY"	"2"	"Ropa"	"Productos"	"2"
"PC-3"	"PRODUCT-CATEGORY"	"3"	"Herramientas"	"Productos"	"3"
"FM-1"	"PRODUCT-FAMILY"	"1"	"Zara"	"Ropa de diseño"	"1"
  */

  /*
  const createService = ProductInjection.create();
  const product: CreateProduct = {
    id: "003",
    code: "P01",
    name: "Camisa",
    description: "",
    sort: "1",
    catalogs: [
      { id: "PC-2", type: "PRODUCT-CATEGORY" },
      { id: "FM-1", type: "PRODUCT-FAMILY" },
    ],
  };

  const result = await createService.execute(product);
  console.table(result);
  console.table(result.data?.catalogs);
  */

  const data: BuyMovto = {
    product: {
      id: "B003",
      code: "1234",
      name: "Refrescos",
      description: "compra",
      sort: "1",
      catalogs: [{ id: "PC-2", type: "PRODUCT-CATEGORY" }],
    },
    movto: {
      quantity: 100,
      price: 500,
      description: "compra 1",
      sort: "1",
    },
  };

  const buyService = MovtoInjection.buy();
  const result = await buyService.execute(data);
  console.table(result.data);
  console.table(result.data.product.catalogs);

  const getByProducts = MovtoInjection.getByProduct();
  const resultProducts = await getByProducts.execute("B003");
  console.table(resultProducts.data);
};

main();
