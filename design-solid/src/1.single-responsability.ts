class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  changeEmail(newEmail: string) {
    if (this.validEmail(this.email)) {
      this.email = newEmail;
    } else {
      throw new Error("Email inválido");
    }
  }
  validEmail(newEmail: string) {
    return true;
  }
}

class UserSRP {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  setEmail(newEmail: string) {
    this.email = newEmail;
  }
}

class EmailValidator {
  static validEmail(newEmail: string) {
    //lógica de validación
    return true;
  }
}

class EmailManager {
  changeEmail(newEmail: string) {
    if (EmailValidator.validEmail(newEmail)) {
      return newEmail;
    } else {
      throw new Error("Email inválido");
    }
  }
}

function sendEmail(email: string, message: string) {}

function processOrder(order: any) {
  // calcula el total del pedido
  let total: number = 0;

  for (let item of order.items) {
    total += item.price * item.quantity;
  }

  //Aplicar descuento si es aplicable
  if (order.customer.hasDiscount) {
    total *= 0.9;
  }

  //realiza pago
  order.customer.account.debit(total);

  //actualiza inventario
  for (let item of order.items) {
    item.product.inventory -= item.quantity;
  }

  //enviar correo de confirmación
  sendEmail(order.customer.email, "su pedido");
}

function calculaTotal(order: any) {}
function applyDiscount(order: any) {}
function processPayment(order: any) {}
function updateInventory(order: any) {}

function processOrderSRP(order: any) {
  calculaTotal(order);
  applyDiscount(order);
  processPayment(order);
  updateInventory(order);
}
