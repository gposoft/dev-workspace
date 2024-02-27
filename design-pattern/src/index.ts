import { clientSemaforoProblem } from "./state/state.problem";
import { clientSemaforoState } from "./state/state.man.solution";
import { clientSemaforoAutState } from "./state/state.aut.solution";
import { clientAdapter } from "./adapter/adapter.problem.1";
import { adapterDocument2 } from "./adapter/adapter.solution.2";
import { clientProxy } from "./proxy/proxy.solution.1";
import { clientProductProxy } from "./proxy/proxy.solution.2";
import { clientObserver } from "./observer/observer.solution";


const start = () => {
  console.log("start", "iniciado...");

  //clientSemaforoProblem()
  //clientSemaforoState()
  //clientSemaforoAutState();

  //clientAdapter();
  //adapterDocument2();

  //clientProxy();
  //clientProductProxy();

  clientObserver();
};

start();
