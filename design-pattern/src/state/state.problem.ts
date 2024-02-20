class Semaforo {
  private state: string;

  constructor() {
    this.state = "red";
  }

  change() {
    if (this.state === "red") {
      console.log("Cambio a verde");
      this.state = "green";
    } else if (this.state === "green") {
      console.log("Cambio a amarillo");
      this.state = "yellow";
    } else if (this.state === "yellow") {
      console.log("Cambio a rojo");
      this.state = "red";
    }
  }
}

export const clientSemaforoProblem = () => {
  const sem = new Semaforo();
  sem.change();
  sem.change();
  sem.change();
};
