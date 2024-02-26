class InMemoryProductRepository {
  private product: any[];

  constructor() {
    this.product = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ];
  }

  getAllProduct() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product[id];
  }
}

//solución

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductRepository {
  getAllProduct(): Product[];
  getProductById(id: number): Product;
}

class InMemoryProductRepositoryOCP implements ProductRepository {
  private product: Product[];

  constructor() {
    this.product = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ];
  }

  getAllProduct() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product[id];
  }
}

class MySqlProductRepositoryOCP implements ProductRepository {
  private product: Product[] = [];
  //lógica de mysql

  getAllProduct() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product[id];
  }
}

function getProduct(data: ProductRepository) {
  //lógica...
}

getProduct(new InMemoryProductRepositoryOCP());
getProduct(new MySqlProductRepositoryOCP());

/****************/

class ProcesadorPago {
  procesarPago(product: Product, tipoDescuento: string) {
    let precioDescuento = product.price;

    switch (tipoDescuento) {
      case "Descuento10":
        precioDescuento = this.aplicaDescuento10(product.price);
        break;
      case "Descuento11":
        precioDescuento = this.aplicaDescuento11(product.price);
        break;
      default:
        break;
    }
  }

  aplicaDescuento10(precio: number) {
    return precio * 0.9;
  }

  aplicaDescuento11(precio: number) {
    return precio * 0.8;
  }
}

interface Descuento {
  aplicaDescuento(precio: number): number;
}

class Descuento10 implements Descuento {
  aplicaDescuento(precio: number): number {
    return precio * 0.9;
  }
}

class Descuento11 implements Descuento {
  aplicaDescuento(precio: number): number {
    return precio * 0.8;
  }
}

class ProcesaPagoOCP {
  procesarPago(product: Product, descuento: Descuento) {
    const precioDescuento = descuento.aplicaDescuento(product.price);
  }
}

const pago = new ProcesaPagoOCP();
pago.procesarPago(
                   { id: 1, 
                    name: "Producto 1", 
                    price: 100 }, 
                new Descuento10()
                );

pago.procesarPago(
                   { id: 1, 
                    name: "Producto 1", 
                    price: 100 }, 
                new Descuento11()
                );
