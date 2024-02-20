import { AritmeticPlannerStrategy } from "./context/contextUco.strategy";
import { SumAritmeticStrategy, RestAritmeticStrategy, MultAritmeticStrategy, DivAritmeticStrategy } from "./exercice/usecaseUco/index";

export const clientStrategyAritmetic = () => {
  const sumAritmetic = new AritmeticPlannerStrategy(new SumAritmeticStrategy());
  sumAritmetic.generateOperation(1, 2);

  const restAritmetic = new AritmeticPlannerStrategy(new RestAritmeticStrategy());
  restAritmetic.generateOperation(1, 2);

  const multiAritmetic = new AritmeticPlannerStrategy(new MultAritmeticStrategy());
  multiAritmetic.generateOperation(1, 2);

  const divAritmetic = new AritmeticPlannerStrategy(new DivAritmeticStrategy());
  divAritmetic.generateOperation(1, 2);
};
