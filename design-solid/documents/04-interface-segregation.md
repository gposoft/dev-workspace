# Los 5 principios para desarrollar software de calidad

## 4. Principio de segregación de interfaz (Interface Segregation Principle): ISP

Es un principio fundamental en la programación orientada a objetos. Este principio establece que los clientes de un programa dado solo deberían conocer de este aquellos métodos que realmente usan, y no aquellos que no necesitan usar.

En otras palabras, las interfaces deben ser lo más pequeñas posible, por lo que hay que evitar incluir métodos que no son necesarios para todos los clientes. Este principio fue introducido por el reconocido autor y científico de la computación Robert C. Martin, quien argumentó que las interfaces más pequeñas y específicas son más fáciles de entender, implementar y mantener. Al diseñar interfaces de esta manera, se evita que las clases dependan de métodos que no utilizan y se promueve un acoplamiento más bajo entre las diferentes partes de un sistema.

El ISP es fundamental para el desarrollo de software orientado a objetos por varias razones:

Claridad y coherencia: al diseñar interfaces más pequeñas y específicas, se mejora la claridad y coherencia del código.<br>
Mantenimiento simplificado: al tener interfaces más pequeñas y cohesivas, el mantenimiento del código se vuelve más sencillo.<br>
Evitar la dependencia innecesaria: al violar el ISP y tener interfaces sobrecargadas con métodos innecesarios, se puede generar una dependencia innecesaria entre las clases y los clientes que las utilizan.<br>

[**Regresar**](./00-intro.md)
