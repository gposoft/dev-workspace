import { DocumentMinerTemplete } from "../context/context.template";

export class PdfMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento pdf";
  }
  analyzedData(): string {
    return "Analiza documento pdf";
  }
}
