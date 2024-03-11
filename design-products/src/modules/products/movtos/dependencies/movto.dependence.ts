import { ProductServiceCore } from "../../core/services/product.core.service";
import { ProductCreatePgRepository } from "../../product/logic/repository/product.create.pg.repository";
import { ProductCreateRepository } from "../../product/models/repository/product.repository";
import { ProductCreateProvider } from "../../product/providers/product.create.provider";
import { MovtoCreatePgRepository } from "../logic/movto.create.pg.repository";
import { MovtoGetByProductsPgRepository } from "../logic/movto.getbyproduct.repository";
import { MovtoCreateRepository, MovtoGetByProductRepository } from "../models/repository/movto.repository";
import { BuyService } from "../services/buy.service";
import { MovtoCreateService } from "../services/movto.create.service";
import { MovtoGetByProductsService } from "../services/movto.getbyproduct.service";

const movtoCreateRepository: MovtoCreateRepository = new MovtoCreatePgRepository();
const movtoGetByProductRepository: MovtoGetByProductRepository = new MovtoGetByProductsPgRepository()
const productCreateRepository: ProductCreateRepository = new ProductCreatePgRepository();

//comunicación entre Movto y Product
const productServiceCore: ProductServiceCore = new ProductCreateProvider({ productCreateRepository });

export const MovtoInjection = {
  create: () => new MovtoCreateService({ movtoCreateRepository }),
  getByProduct: () => new MovtoGetByProductsService({movtoGetByProductRepository}),
  buy: () => new BuyService({ productServiceCore, movtoCreateRepository }),
};


