interface ProductEntity {
  id: string;
  name: string;
}

interface CreateProduct {
  id: string;
  name: string;
}

interface UpdateProduct {
  name: string;
}

interface ProductCreatorRepository {
  execute(product: CreateProduct): ProductEntity;
}

interface ProductUpdateRepository {
  execute(id: string, product: UpdateProduct): ProductEntity;
}

class ProductMemoryCreatorRepository implements ProductCreatorRepository {
  execute(product: CreateProduct): ProductEntity {
    //lógica para registro en memoria
    throw new Error("Method not implemented.");
  }
}

class ProductMemoryUpdateRepository implements ProductUpdateRepository {
  execute(id: string, product: UpdateProduct): ProductEntity {
    //lógica para registro en memoria
    throw new Error("Method not implemented.");
  }
}

class ProductMySqlCreatorRepository implements ProductCreatorRepository {
  execute(product: CreateProduct): ProductEntity {
    //lógica para registro en MySql
    throw new Error("Method not implemented.");
  }
}

class ProductService {
  constructor(
    private readonly provider: {
      productCreatorRepository: ProductCreatorRepository;
      productUpdateRepository: ProductUpdateRepository;
    }
  ) {}

  create(product: CreateProduct) {
    const result = this.provider.productCreatorRepository.execute(product);
    if (!result) {
      throw new Error("Error al guardar");
    }
    return result;
  }

  update(id: string, product: UpdateProduct) {
    const result = this.provider.productUpdateRepository.execute(id, product);
    if (!result) {
      throw new Error("Error al actualizar");
    }
    return result;
  }
}

const providerCreate = new ProductMemoryCreatorRepository();
const providerUpdate = new ProductMemoryUpdateRepository();

const productService = new ProductService({
  productCreatorRepository: providerCreate,
  productUpdateRepository: providerUpdate,
});

const createProduct: CreateProduct = {
    id:"1",
    name:"Coffee"
}

const updateProduct : UpdateProduct ={
  name:"Coffee"
}

productService.create(createProduct);
productService.update("1", updateProduct);
