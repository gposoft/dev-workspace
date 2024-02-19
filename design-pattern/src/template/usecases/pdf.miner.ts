import { DocumentMinerTemplete } from "../document/document";

export class PdfMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento pdf";
  }
  analyzedData(): string {
    return "Analiza documento pdf";
  }
}
