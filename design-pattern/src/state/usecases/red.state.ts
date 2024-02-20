import { GreenAutState } from ".";
import { SemaforoAut, SemaforoAutState } from "../context";

export class RedAutState implements SemaforoAut {
  change(context: SemaforoAutState): void {
    console.log("Luz - Rojo");
    context.setChange(new GreenAutState());
  }
}
