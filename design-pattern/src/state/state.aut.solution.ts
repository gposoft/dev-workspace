import { SemaforoAutState } from "./context";
import { RedAutState } from "./usecases";


export const clientSemaforoAutState = async () => {
  console.log("Aplicando el patrón state");

  const semaforo = new SemaforoAutState(new RedAutState);
  await semaforo.change();
  await semaforo.change();
  await semaforo.change();
  await semaforo.change();
};
