import { DocumentMinerTemplete } from "../context/context.template";

export class DocMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento doc";
  }
  analyzedData(): string {
    return "Analiza documento doc";
  }
}
