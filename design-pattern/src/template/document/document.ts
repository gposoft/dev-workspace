export abstract class DocumentMinerTemplete {
  constructor(protected readonly document: string) {}

  abstract extract(): string;
  abstract analyzedData(): string;

  map() {
    return "Mapeando la data";
  }

  displayResult() {
    return "Imprime la data";
  }

  minerDocument() {
    console.log(this.document);
    console.log(this.extract());
    console.log(this.analyzedData());
    console.log(this.map());
    console.log(this.displayResult());
    console.log("Fin ...");
  }
}
