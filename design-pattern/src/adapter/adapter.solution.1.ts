import { MotorNuevo, MotorViejo } from "./adapter.problem.1";

export class MotorAdapter extends MotorNuevo {
  motorViejo: MotorViejo;

  constructor(motorViejo: MotorViejo) {
    super();
    this.motorViejo = motorViejo;
  }

  encender(): string {
    return this.motorViejo.encenderViejo();
  }
}
