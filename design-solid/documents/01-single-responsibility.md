# Los 5 principios para desarrollar software de calidad

## 1. Principio de responsabilidad única (Single Responsibility Principle) - SRP

Es un principio de diseño de software que establece que cada función, módulo o clase de software debe tener una, y sólo una, razón para cambiar. En otras palabras, una debe tener una sola responsabilidad en el sistema.

Si tiene más de una responsabilidad, se vuelve más difícil de entender, mantener y modificar con el tiempo. Cada responsabilidad es el eje del cambio. Para contener la propagación del cambio, debemos separar las responsabilidades. Si una clase asume más de una responsabilidad, será más sensible al cambio. Si una clase asume más de una responsabilidad, las responsabilidades se acoplan.

La importancia del SRP radica en su capacidad para mantener el código limpio y bien organizado. Cuando una clase tiene una sola responsabilidad, es más fácil de probar y de cambiar sin afectar a otras partes del sistema. Esto promueve la modularidad y la reutilización del código, lo que a su vez conduce a un desarrollo más eficiente y a la reducción de errores.

Por ejemplo, imagina un programa de gestión de biblioteca. En lugar de tener una única clase que maneje la gestión de libros, la interfaz de usuario y la lógica de negocio, el principio de responsabilidad única sugiere dividir estas responsabilidades en clases separadas.

Tendrías una clase para la gestión de libros, otra para la interfaz de usuario y otra para la lógica de negocio. Esto hace que cada clase sea más fácil de entender y mantener y facilita la colaboración en equipos de desarrollo.


[**Regresar**](./00-intro.md)
