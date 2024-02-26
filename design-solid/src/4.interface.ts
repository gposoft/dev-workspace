interface Trabajador {
  trabajar(): void;
  atenderLlamada(): void;
  tomarDescanso(): void;
}

class Empleado implements Trabajador {
  trabajar(): void {
    console.log("Trabajando....");
  }
  atenderLlamada(): void {
    console.log("atendiendo la llamada....");
  }
  tomarDescanso(): void {
    console.log("descansando....");
  }
}

class Robot implements Trabajador {
  trabajar(): void {
    console.log("Trabajando....");
  }
  atenderLlamada(): void {
    console.log("No puedo....");
    throw new Error("No puedo");
  }
  tomarDescanso(): void {
    console.log("No requiero descanso....");
    throw new Error("No requiero");
  }
}

interface Trabajo {
  trabajar(): void;
}

interface AtencionClient {
  atenderLlamada(): void;
}

interface Descanso {
  tomarDescanso(): void;
}

class EmpleadoHumano implements Trabajo, AtencionClient, Descanso {
  trabajar(): void {
    console.log("Trabajando....");
  }
  atenderLlamada(): void {
    console.log("atendiendo la llamada....");
  }
  tomarDescanso(): void {
    console.log("descansando....");
  }
}

class EmpleadoRobot implements Trabajo {
  trabajar(): void {
    console.log("Trabajando....");
  }
}

interface Product {
  id: number;
  name: string;
  price: number;

  imprimir(): void;
}

interface CreateProduct {
  id: number;
  name: string;
  price: number;
}

interface UpdateProduct {
  name: string;
}

function guardar(product: CreateProduct) {}

function modificar(product: UpdateProduct) {}

function getProducts(): Product[] {
  return [];
}

/*
  product1.imprimir() 
*/
