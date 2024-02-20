import { clientSemaforoProblem } from "./state/state.problem";
import { clientSemaforoState } from "./state/state.man.solution";
import { clientSemaforoAutState } from "./state/state.aut.solution";

const start = () => {
  console.log("start", "iniciado...");

  //clientSemaforoProblem()
  //clientSemaforoState()
  clientSemaforoAutState();

};

start();
