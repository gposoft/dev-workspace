import { DocumentMinerTemplete } from "../context/context.template";

export class CsvMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento csv";
  }
  analyzedData(): string {
    return "Analiza documento csv";
  }
}
