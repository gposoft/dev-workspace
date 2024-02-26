class Rectangulo {
  constructor(public ancho: number, public alto: number) {}

  setAncho(ancho: number) {
    this.ancho = ancho;
  }

  setAlto(alto: number) {
    this.alto = alto;
  }

  getArea() {
    return this.ancho * this.alto;
  }
}

class Cuadrado extends Rectangulo {
  constructor(public ancho: number, public alto: number) {
    super(ancho, alto);
  }

  setAncho(ancho: number) {
    this.ancho = ancho;
  }

  setAlto(alto: number) {
    this.alto = alto;
  }
}

const rectangulo: Rectangulo = new Cuadrado(10, 10);
rectangulo.getArea();

/*********/

abstract class Figura {
  constructor() {
    //lógica .....
  }

  imprimir() {
    //Lógica
  }

  abstract getArea(): number;
}

class RectanguloLkP extends Figura {
  constructor(public ancho: number, public alto: number) {
    let x=0;
    super();
    //Mi lógica
  }

  setAncho(ancho: number) {
    this.ancho = ancho;
  }

  setAlto(alto: number) {
    this.alto = alto;
  }

  getArea() {
    return this.ancho * this.alto;
  }
}

class CuadradoLkP extends Figura {
  constructor(public lado: number) {
    super();
  }

  getArea() {
    return this.lado * this.lado;
  }
}

class TrianguloEquilateroLkP extends Figura {
  constructor(public base: number, public altura: number) {
    super();
  }

  getArea() {
    return (this.base * this.altura) / 2;
  }
}

const figura1: Figura = new RectanguloLkP(10, 20);
const figura2: Figura = new CuadradoLkP(10);
const figura3: Figura = new TrianguloEquilateroLkP(10, 10);

figura1.getArea()
figura1.imprimir()