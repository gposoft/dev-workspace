import { Person } from "./models";

interface Loader {
  process(document: string): Person[];
}

class JsonDocument implements Loader {
  process(document: string): Person[] {
    console.log(document);
    return [];
  }
}

class DocumentLoader {
  constructor(private load: Loader) {}

  setStrategy(load: Loader) {
    return this.load = load
  }

  process(document:string) : Person[] {
    return this.load.process(document)
  }
}

class XmlDocument {
    upload(document:string){
        console.log("XML", document)
    }
}

class XlsDocument {
    read(document:string){
        console.log("XLS", document)
    }
}

class ApiPlaceHolderDocument {
    getApi(document:string){
        console.log("XLS", document)
    }
}

const adapterDocument = () => {

    const json = new DocumentLoader(new JsonDocument());
    json.process("....")


}


