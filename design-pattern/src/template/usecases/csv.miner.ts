import { DocumentMinerTemplete } from "../document/document";

export class CsvMinerTemplate extends DocumentMinerTemplete {
  extract(): string {
    return "Extrayendo documento csv";
  }
  analyzedData(): string {
    return "Analiza documento csv";
  }
}
