# Test - Pruebas unitarias

## Concepto

Las pruebas unitarias son un proceso en el que se prueba la unidad funcional de código más pequeña. En programación, una prueba unitaria es una forma efectiva de comprobar el correcto funcionamiento de las unidades individuales más pequeñas de los programas informáticos.

Las pruebas unitarias tienen varias ventajas algunas de ellas son:

Fomentan el cambio: Facilitan que el programador cambie el código para mejorar su estructura.<br>
Simplifican la integración: Permiten llegar a la fase de integración con un grado alto de seguridad de que el código está funcionando correctamente.<br>
Documentan el código: Las propias pruebas son documentación del código, puesto que ahí se puede ver cómo utilizarlo.<br>

```ts
export function sum(a, b) {
  return a + b;
}
```

```bash
// test

  let a= 1
  let b= 2
  let espero= 3

  espera( sum(valorA,valorB) ).ser(espero)
```
