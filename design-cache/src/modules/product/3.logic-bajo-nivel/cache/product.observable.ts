import { Observables, Observer } from "../../../shared/models/observer.model";
import { Product } from "../../2.abtract-medio-nivel/product/product.model";

export class ProductObservable implements Observables<Product> {
  private product: Product;
  private observers: Observer<Product>[] = [];

  constructor(product: Product) {
    this.product = product;
  }

  setName(name: string): void {
    this.product.name = name;
    this.notify();
  }

  setPrice(price: number): void {
    this.product.price = price;
    this.notify();
  }

  subscribe(observer: Observer<Product>): void {
    this.observers.push(observer);
  }
  cancel(observer: Observer<Product>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this.product);
    });
  }
}
