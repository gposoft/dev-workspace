/*
  1. Extract
  2. AnalyzeData
  3. Map
  4. DisplayResults
*/

class DocumentMiner {
  minerPdf(document: string) {
    console.log("Document pdf");

    //Lógica por tipo de documento
    const extract = () => "Extrayendo documento pdf";
    const analyzedData = () => "Analizando documento pdf";

    //Lógica Repetida en todos los documentos
    const map = () => "Mapeando la data";
    const displayResults = () => "Imprime la data";
  }

  minerDoc(document: string) {
    console.log("Document doc");

    //Lógica por tipo de documento
    const extract = () => "Extrayendo documento doc";
    const analyzedData = () => "Analizando documento doc";

    //Lógica Repetida en todos los documentos
    const map = () => "Mapeando la data";
    const displayResults = () => "Mapeando la data";
  }

  minerCsv(document: string) {
    console.log("Document csv");

    //Lógica por tipo de documento
    const extract = () => "Extrayendo documento csv";
    const analyzedData = () => "Analizando documento csv";

    //Lógica Repetida en todos los documentos
    const map = () => "Mapeando la data";
    const displayResults = () => "Mapeando la data";
  }

}
