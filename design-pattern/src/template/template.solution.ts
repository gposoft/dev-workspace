import { CsvMinerTemplate, DocMinerTemplate, PdfMinerTemplate } from "./usecases";



export const clientTemplate = () => {
  const pdf = new PdfMinerTemplate("document.pdf");
  pdf.minerDocument();

  const doc = new DocMinerTemplate("document.doc");
  doc.minerDocument();

  const csv = new CsvMinerTemplate("document.csv");
  csv.minerDocument();
};
