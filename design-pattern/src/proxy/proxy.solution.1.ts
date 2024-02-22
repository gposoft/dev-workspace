interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  request(): void {
    console.log("Real sujeto");
  }
}

class ProxySubject implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request(): void {
    console.log("Proxy:", "Proceso antes...");
    this.realSubject.request();
    console.log("Proxy:", "Proceso después...");
  }
}

export const clientProxy =() => {
    const realSubject = new RealSubject()
    const proxy = new ProxySubject(realSubject);
    proxy.request();
}

