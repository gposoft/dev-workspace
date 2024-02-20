//Abstracto
export interface SemaforoAut {
  change(context: SemaforoAutState): void;
}

//Contexto
export class SemaforoAutState {
  constructor(private state: SemaforoAut, private time:number = 5000) {}

  setChange(state: SemaforoAut) {
    this.state = state;
  }

  private wait = () => new Promise((resolve) => setTimeout(resolve, this.time));

  async change() {
    await this.state.change(this);
    await this.wait();
  }
}
