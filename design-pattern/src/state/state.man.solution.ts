//Abstracto
interface Semaforo {
  change(): void;
}

//Contexto
class SemaforoState {
  constructor(private state: Semaforo) {}

  setChange(state: Semaforo) {
    this.state = state;
  }

  change() {
    this.state.change();
  }
}

class RedState implements Semaforo {
  change(): void {
    console.log("Luz - Rojo");
  }
}

class GreenState implements Semaforo {
  change(): void {
    console.log("Luz - Verde");
  }
}

class YellowState implements Semaforo {
  change(): void {
    console.log("Luz - Amarilla");
  }
}

export const clientSemaforoState = () => {
  console.log("Aplicando el patron state");

  const semaforo = new SemaforoState(new GreenState());
  semaforo.change();

  semaforo.setChange(new YellowState());
  semaforo.change();

  semaforo.setChange(new RedState());
  semaforo.change();
};
