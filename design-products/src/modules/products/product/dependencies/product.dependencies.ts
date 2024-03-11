import { ProductCreatePgRepository } from "../logic/repository/product.create.pg.repository";
import { ProductGetByIdPgRepository } from "../logic/repository/product.getbyid.pg.repository";
import { ProductGetsPgRepository } from "../logic/repository/product.gets.pg.repository";
import { ProductUpdatePgRepository } from "../logic/repository/product.update.pg.repository";
import { ProductCreateRepository, ProductGetByIdRepository, ProductGetsRepository, ProductUpdateRepository } from "../models/repository/product.repository";
import { ProductCreateService } from "../services/product.create.service";
import { ProductGetByIdService } from "../services/product.getbyid.service";
import { ProductGetsService } from "../services/product.gets.service";
import { ProductUpdateService } from "../services/product.update.service";

const productCreateRepository: ProductCreateRepository = new ProductCreatePgRepository();
const productUpdateRepository: ProductUpdateRepository = new ProductUpdatePgRepository();
const productGetsRepository: ProductGetsRepository = new ProductGetsPgRepository();
const productGetByIdRepository: ProductGetByIdRepository = new ProductGetByIdPgRepository();

export const ProductInjection = {
  create: () => new ProductCreateService({ productCreateRepository }),
  update: () => new ProductUpdateService({ productUpdateRepository }),
  gets: () => new ProductGetsService({ productGetsRepository }),
  get: () => new ProductGetByIdService({ productGetByIdRepository }),
};
