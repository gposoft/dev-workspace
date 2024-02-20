import { AritmeticaPlanner, SumaArt, RestaArt, DividirArt, MultiplicarArt } from ".";

export const clientArt = () => {
  const sumaCliente = new AritmeticaPlanner(new SumaArt());
  console.log(sumaCliente.operationArt(10, 5));
  
  const restaCliente = new AritmeticaPlanner(new RestaArt());
  console.log(restaCliente.operationArt(10, 5));
  const multiplicaCliente = new AritmeticaPlanner(new MultiplicarArt());
  console.log(multiplicaCliente.operationArt(10, 5));
  const divideCliente = new AritmeticaPlanner(new DividirArt());
  console.log(divideCliente.operationArt(10, 5));
};
