import { DocumentMinerTemplete } from "../document/document";

export class DocMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento doc";
  }
  analyzedData(): string {
    return "Analiza documento doc";
  }
}
