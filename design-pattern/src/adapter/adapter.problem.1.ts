import { MotorAdapter } from "./adapter.solution.1";

export class MotorViejo {
    encenderViejo() {
        return "El motor viejo se esta encendiendo ...!"
    }
}

export class MotorNuevo {
    encender() {
        return "El motor nuevo se esta encendiendo ...!"
    }
}

export class Auto {

    constructor(public motor: MotorNuevo) {} 

    encenderMotor() {
        return this.motor.encender()
    }
}



export const clientAdapter = () => {
    const aut1 = new Auto(new MotorNuevo());
    const result1 = aut1.encenderMotor()
    console.log("Motor Nuevo", result1)

    const aut2 = new Auto(new MotorAdapter(new MotorViejo()));
    const result2 = aut2.encenderMotor();
    console.log("Motor Nuevo", result2);
}
