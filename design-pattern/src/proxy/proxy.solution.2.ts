interface Product {
  getId(): number;
  getName(): string;
  getPrice(): number;
}

class RealProduct implements Product {
  private id: number;
  private name: string;
  private price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

class ProxyAProduct implements Product {
  constructor(private readonly realProduct: RealProduct) {}

  getId(): number {
    return this.realProduct.getId();
  }
  getName(): string {
    return this.realProduct.getName();
  }
  getPrice(): number {
    if (this.getId() === 999) {
      const currentPrice = 18.5;
      return this.realProduct.getPrice() * currentPrice;
    }

    return this.realProduct.getPrice();
  }

  view() {
    console.log(`Product: ${this.getId()} - ${this.getName()} - ${this.getPrice()}  `);
  }
}

class ProxyBProduct implements Product {
  private realProduct: RealProduct;

  constructor(id: number, name: string, price: number) {
    this.realProduct = new RealProduct(id, name, price);
  }

  getId(): number {
    return this.realProduct.getId();
  }
  getName(): string {
    return this.realProduct.getName();
  }
  getPrice(): number {
    const currentPrice = 18.5;
    return this.getId() === 999 ? this.realProduct.getPrice() * currentPrice : this.realProduct.getPrice();
  }

  view() {
    console.log(`Product: ${this.getId()} - ${this.getName()} - ${this.getPrice()}  `);
  }
}

export const clientProductProxy = () => {
  const product = new RealProduct(999, "Jon", 10);
  const proxyA = new ProxyAProduct(product);
  proxyA.view();

  const proxyB = new ProxyBProduct(1, "Superior", 100);
  proxyB.view();
};
