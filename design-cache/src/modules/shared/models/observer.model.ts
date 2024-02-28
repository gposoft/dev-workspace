export interface Observer<T> {
  update(item: T): void;
}

export interface Observables<T> {
  subscribe(observer: Observer<T>): void;
  cancel(observer: Observer<T>): void;
  notify(): void;
}
