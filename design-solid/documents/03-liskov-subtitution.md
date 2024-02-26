# Los 5 principios para desarrollar software de calidad

## 3. Principio de sustitución de Liskov (Liskov Substitution Principle): LSP

El Principio de Sustitución de Liskov (LSP), por sus siglas en inglés (Liskov Substitution Principle), es un principio fundamental en la programación orientada a objetos. Este principio establece que si una clase S es un subtipo de una clase T, entonces los objetos de tipo T pueden ser reemplazados por objetos de tipo S sin alterar ninguna de las propiedades deseables de ese programa.

En términos más simples, si tienes una clase base y una clase derivada, deberías poder usar la clase derivada en lugar de la clase base sin que tu programa falle o se comporte de manera inesperada.

Por ejemplo, si tienes una clase Animal con un método mover(), y una clase Pájaro que hereda de Animal, deberías poder usar un objeto de la clase Pájaro en cualquier lugar donde tu código espere un objeto de la clase Animal, y tu código debería seguir funcionando correctamente.

Este principio es importante porque ayuda a garantizar que cuando creas nuevas clases derivadas, no rompes la funcionalidad existente. También ayuda a hacer tu código más modular y fácil de entender, ya que puedes confiar en que las clases derivadas se comportarán de cierta manera.

[**Regresar**](./00-intro.md)
