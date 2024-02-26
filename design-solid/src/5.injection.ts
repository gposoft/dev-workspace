interface Notificar {
  enviarMensaje(mensaje: string):void
}


class Correo implements Notificar {
  enviarMensaje(mensaje: string) {
    console.log(`Mensaje enviado email: ${mensaje}`);
  }
}

class SMS implements Notificar {
  enviarMensaje(mensaje: string) {
    console.log(`Mensaje enviado SMS: ${mensaje}`);
  }
}

class SistemaEnviaMensaje {
  private service: Notificar;

  constructor(service: Notificar) {
    this.service = service;
  }

  enviarMensaje(mensaje: string) {
    this.service.enviarMensaje(mensaje);
  }
}


const msg1= new SistemaEnviaMensaje(new Correo());
const msg2 = new SistemaEnviaMensaje(new SMS());

