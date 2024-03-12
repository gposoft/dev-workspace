import { assert, describe, expect, test } from "vitest";
import { sum } from "./sum";

/*

expect:
.toBe(value): Comprueba si el valor es exactamente igual (===) al valor esperado.
.toEqual(value): Comprueba si el valor es igual al valor esperado. A diferencia de toBe, este método comprueba la igualdad de los valores, no su identidad. Es útil para comparar objetos o arrays.
.not: Se utiliza para invertir el sentido de cualquier matcher. Por ejemplo, expect(a).not.toBe(b) comprueba que a no es exactamente igual a b.
.toBeTruthy(): Comprueba que el valor es verdadero.
.toBeFalsy(): Comprueba que el valor es falso.
.toBeGreaterThan(number): Comprueba que el valor es mayor que el número proporcionado.
.toBeLessThan(number): Comprueba que el valor es menor que el número proporcionado.
.toBeGreaterThanOrEqual(number): Comprueba que el valor es mayor o igual que el número proporcionado.
.toBeLessThanOrEqual(number): Comprueba que el valor es menor o igual que el número proporcionado.
.toContain(item): Comprueba que un array o string contiene el elemento proporcionado.
.toBeCloseTo(number, precision): Comprueba que un número es cercano a otro número, dentro de una cierta precisión.
.toBeInstanceOf(Class): Comprueba que un objeto es una instancia de una clase específica.
.toHaveProperty(key, value): Comprueba que un objeto tiene una propiedad con una clave y un valor específicos.
.toMatch(regexp): Comprueba que una cadena coincide con una expresión regular.
.toThrow(error): Comprueba que una función lanza un error específico cuando se llama.
.toHaveLength(length): Comprueba que un objeto o una matriz tiene una longitud específica.
.toBeDefined(): Comprueba que un valor está definido.
.toBeUndefined(): Comprueba que un valor está indefinido.
.toBeNull(): Comprueba que un valor es nulo.
.toBeNaN(): Comprueba que un valor es NaN.
.toContainEqual(item): Comprueba que un array contiene un elemento que es igual (en términos de valor y estructura) al elemento proporcionado.

assert:
.ok(value): Comprueba si el valor es verdadero. Si no lo es, la prueba falla.
.equal(actual, expected): Comprueba si dos valores son iguales utilizando el operador de igualdad (==). Si no lo son, la prueba falla.
.strictEqual(actual, expected): Comprueba si dos valores son iguales utilizando el operador de igualdad estricta (===). Si no lo son, la prueba falla.
.deepEqual(actual, expected): Comprueba si dos objetos, y sus propiedades internas, son iguales. Si no lo son, la prueba falla.
.notEqual(actual, expected): Comprueba si dos valores no son iguales utilizando el operador de desigualdad (!=). Si son iguales, la prueba falla.
.notStrictEqual(actual, expected): Comprueba si dos valores no son iguales utilizando el operador de desigualdad estricta (!==). Si son iguales, la prueba falla.
.notDeepEqual(actual, expected): Comprueba si dos objetos, y sus propiedades internas, no son iguales. Si son iguales, la prueba falla.
.throws(block, error): Comprueba si una función lanza un error específico cuando se llama. Si no lanza un error, o si lanza un error diferente, la prueba falla.
.doesNotThrow(block, error): Comprueba si una función no lanza un error específico cuando se llama. Si lanza un error, la prueba falla.
.ifError(value): Comprueba si el valor es null o undefined. Si no lo es, la prueba falla. Es útil para comprobar errores.
.fail(actual, expected, message, operator): Hace que la prueba falle. Puedes proporcionar valores actual y expected, un message personalizado y un operator para la salida del error.
.strictNotEqual(actual, expected): Comprueba si dos valores no son iguales utilizando el operador de desigualdad estricta (!==). Si son iguales, la prueba falla.
.deepStrictEqual(actual, expected): Comprueba si dos objetos, y sus propiedades internas, son iguales utilizando el operador de igualdad estricta (===). Si no lo son, la prueba falla.
.notDeepStrictEqual(actual, expected): Comprueba si dos objetos, y sus propiedades internas, no son iguales utilizando el operador de igualdad estricta (===). Si son iguales, la prueba falla.
.rejects(asyncFn, error): Comprueba que una función asíncrona rechaza con un error específico cuando se llama. Si no rechaza, o si rechaza con un error diferente, la prueba falla.
.doesNotReject(asyncFn, error): Comprueba que una función asíncrona no rechaza con un error específico cuando se llama. Si rechaza, la prueba falla.
*/

describe("Grupo de test de matemáticas", () => {
  test("Prueba la función de suma", () => {
    const mockA = 1;
    const mockB = 2;
    const mockEspero = 3
    const resultado = sum(mockA, mockB);

    //assert.equal(resultado, espero);
    expect(resultado).toBe(mockEspero);
  });
});
