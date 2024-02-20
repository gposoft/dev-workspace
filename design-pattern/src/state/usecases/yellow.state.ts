import { RedAutState } from ".";
import { SemaforoAut, SemaforoAutState } from "../context";

export class YellowAutState implements SemaforoAut {
  change(context: SemaforoAutState): void {
    console.log("Luz - Amarilla");
    context.setChange(new RedAutState());
  }
}
