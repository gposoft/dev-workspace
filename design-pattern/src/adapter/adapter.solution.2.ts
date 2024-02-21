import fs from "fs";
import xml2js from "xml2js";
import * as ExcelJs from "exceljs";
import { Person } from "./models";
import { faker } from "@faker-js/faker";
import { report } from "process";

interface LoaderStrategy {
  process(path: string): Promise<Person[]>;
}

class DocumentLoaderContext {
  constructor(private load: LoaderStrategy) {}

  setStrategy(load: LoaderStrategy) {
    this.load = load;
  }

  async process(path: string): Promise<Person[]> {
    return this.load.process(path);
  }
}

class JsonDocument implements LoaderStrategy {
  async process(path: string): Promise<Person[]> {
    try {
      const jsonString: string = await new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });

      const result: Person[] = JSON.parse(jsonString);

      return result.map((item) => <Person>{ ...item, sexo: item.sexo[0] });
    } catch (error) {
      console.log("Erro:", error);
      throw error;
    }
  }
}

class XmlDocumentLib {
  private async readXml(path: string): Promise<any> {
    try {
      const xmlString: string = await new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });

      let items: any[] = [];
      xml2js.parseString(xmlString, (err, result) => {
        if (err) {
          console.log("Error parsing xml");
          return;
        }

        const personas = result.personas.persona;
        personas.forEach((persona: any) => {
          const id = persona.id[0];
          const name = persona.name[0];
          const sexo = persona.sexo[0];
          items.push({ id, name, sexo });
        });
      });

      return {
        title: "Registro de personas",
        items: items,
      };
    } catch (error) {
      console.log("Erro:", error);
      throw error;
    }
  }

  get(path: string) {
    return this.readXml(path);
  }
}

class XmlDocumentAdapter implements LoaderStrategy {
  async process(path: string): Promise<Person[]> {
    const xmlLoad = new XmlDocumentLib();
    const xmlResult = await xmlLoad.get(path);
    return xmlResult.items.map((item: any) => <Person>{ ...item, sexo: item.sexo[0] });
  }
}

class XlsDocumentLib {
  async read(path: string, sheet: string) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(path);

    const worksheet = workbook.getWorksheet(sheet);
    const data: any[] = [];

    worksheet?.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) {
        const id = row.getCell("A").value;
        const name = row.getCell("B").value;
        const sexo = row.getCell("C").value;

        data.push({
          person: {
            id,
            name,
            sexo,
          },
          info: {
            company: faker.company.name(),
            phone: faker.phone.number(),
            music: faker.music.songName(),
            location: { city: faker.location.city(), country: faker.location.country(), state: faker.location.state() },
          },
        });
      }
    });

    return data;
  }
}

class XlsDocumentAdapter implements LoaderStrategy {
  async process(path: string): Promise<Person[]> {
    const xlsResult = new XlsDocumentLib();
    const result = await xlsResult.read(path, "Hoja1");
    return result.map((item) => <Person>{ ...item.person, sexo: item.person.sexo === "M" ? "F" : "M" });
  }
}

class ApiJsonPlaceHolderAdapter implements LoaderStrategy {
  private async getUser(path: string) {
    const response = await fetch(path);
    const result = response.json();
    return result as any;
  }

  async process(path: string): Promise<Person[]> {
    const result = await this.getUser(path);
    return result.map((item:any) => <Person>{ id: item.id, name: item.name, sexo: "I" });
  }
}

export const adapterDocument2 = async () => {
  const getPath = (ext: string) => `src/adapter/dataset/persons.${ext}`;

  const documentLoad = new DocumentLoaderContext(new JsonDocument());
  const jsonResult = await documentLoad.process(getPath("json"));
  console.log("json");
  console.table(jsonResult);

  documentLoad.setStrategy(new XmlDocumentAdapter());
  const xmlResult = await documentLoad.process(getPath("xml"));
  console.log("xml");
  console.table(xmlResult);

  documentLoad.setStrategy(new XlsDocumentAdapter());
  const xlsResult = await documentLoad.process(getPath("xlsx"));
  console.log("xls");
  console.table(xlsResult);

  documentLoad.setStrategy(new ApiJsonPlaceHolderAdapter());
  const apiResult = await documentLoad.process("https://jsonplaceholder.typicode.com/users");
  console.log("api");
  console.table(apiResult);
};
