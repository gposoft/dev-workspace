export function CathResponse() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error: any) {
        let message = error.message;

        return {
          status: "error",
          data: 0,
          error: message,
        };
      }
    };

    return descriptor;
  };
}
