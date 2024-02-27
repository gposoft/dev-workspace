/*
interface Observer {
  update(alumno: number): void;
}

interface Observable {
  suscribe(observer: Observer): void;
  cancel(observer: Observer): void;
  notify(): void;
}

class Tutor implements Observer {
  private alumno: Alumno;

  constructor(alumno: Alumno) {
    this.alumno = alumno;
    this.alumno.suscribe(this);
  }

  update(calificacion: number): void {
    if (calificacion < 7) {
      console.log("Notificación: El Alumno tiene bajo desempeño");
    }
  }
}

/*
class Alumno implements Observable {
  private calificacion: number = 0;
  private observers: Observer[] = [];

  setCalificacion(calificacion: number): void {
    this.calificacion = calificacion;
    this.notify();
  }

  suscribe(observer: Observer): void {
    this.observers.push(observer);
  }
  cancel(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(): void {
    for (let observer of this.observers) {
      observer.update(this.calificacion);
    }
  }
}

export const clientObserver = () => {
    let alumno = new Alumno();
    let tutor = new Tutor(alumno);
    alumno.setCalificacion(6);

    console.log("patrón observer");
};
*/

interface Observer {
  monitor(alumno: Alumno): void;
}

interface Observable {
  suscribe(observer: Observer): void;
  cancel(observer: Observer): void;
  notify(id: number): void;
}

class Tutor implements Observer {
  constructor(public name: string /* inyectar la estrategia de envio */) {}

  monitor(alumno: Alumno): void {
    const cal = alumno.getCalificacion();
    if (cal > 0 && cal <= 6) {
      /*aqui va la estrategia para enviar mensaje */
      console.log(`Notificación para ${this.name}: El Alumno ${alumno.getName()} tiene bajo desempeño`);
    }
  }
}

class AlumnoBuilder {
  private alumno: Alumno;

  constructor() {
    this.alumno = new Alumno();
  }

  build(): Alumno {
    return this.alumno;
  }

  id(id: number): AlumnoBuilder {
    this.alumno.setId(id);
    return this;
  }
  name(name: string): AlumnoBuilder {
    this.alumno.setName(name);
    return this;
  }
  calificacion(calificacion: number): AlumnoBuilder {
    this.alumno.setCalificacion(calificacion);
    return this;
  }
}

class Alumno {
  private id: number = 0;
  private name: string = "";
  private calificacion: number = 0;

  constructor() {}

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  setCalificacion(calificacion: number) {
    this.calificacion = calificacion;
  }

  getName(): string {
    return this.name;
  }

  getCalificacion(): number {
    return this.calificacion;
  }

  static builder(): AlumnoBuilder {
    return new AlumnoBuilder();
  }
}

class GestorNotificacion implements Observable {
  private alumnos: Alumno[] = [];
  private observers: Observer[] = [];

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  setCalificacion(id: number, calificacion: number): void {
    for (let alumno of this.alumnos) {
      if (alumno.getId() === id) {
        alumno.setCalificacion(calificacion);
      }
    }
    this.notify(id);
  }

  suscribe(observer: Observer): void {
    this.observers.push(observer);
  }
  cancel(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(id: number): void {
    for (let observer of this.observers) {
      const findAlumno = this.alumnos.find((item) => item.getId() === id);
      if (findAlumno) observer.monitor(findAlumno);
    }
  }
}

export const clientObserver = () => {
  const notify = new GestorNotificacion();
  notify.suscribe(new Tutor("Papa Don pelo"));

  //aplicando el patron builder
  notify.addAlumno(Alumno.builder().id(1).name("Hijo 1").build());
  notify.addAlumno(Alumno.builder().id(2).name("Hijo 2").build());
  notify.addAlumno(Alumno.builder().id(3).name("Hijo 3").build());
  notify.addAlumno(Alumno.builder().id(4).name("Hijo 4").build());

  notify.setCalificacion(1, 5);
  notify.setCalificacion(2, 5);
  notify.setCalificacion(3, 5);
  notify.setCalificacion(4, 5);

  console.log("patron observer");
};
