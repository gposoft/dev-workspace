import { YellowAutState } from ".";
import { SemaforoAut, SemaforoAutState } from "../context";

export class GreenAutState implements SemaforoAut {
  change(context: SemaforoAutState): void {
    console.log("Luz - Verde");
    context.setChange(new YellowAutState());
  }
}
