# Los 5 principios para desarrollar software de calidad

## 5. Principio de inversión de dependencia (Dependency Inversion Principle): DIP

es un principio fundamental en la programación orientada a objetos. Este principio establece que los módulos de alto nivel no deberían depender de los módulos de nivel inferior, sino que ambos deberían depender de abstracciones.

Esto significa que las clases no deben depender directamente de clases específicas, sino de interfaces o clases abstractas. Al seguir este principio, las relaciones de dependencia convencionales establecidas desde los módulos de alto nivel de establecimiento de políticas a los módulos de dependencia de bajo nivel se invierten, lo que hace que los módulos de alto nivel sean independientes de los detalles de implementación del módulo de bajo nivel.

El DIP tiene varias ventajas importantes para el desarrollo de software:

Desacoplamiento: al aplicar este principio, los módulos de alto nivel y los módulos de nivel inferior se vuelven independientes entre sí, lo que facilita los cambios y las modificaciones en el código.<br>
Reutilización de código: al depender de abstracciones en lugar de implementaciones concretas, es posible reutilizar los módulos de nivel inferior en diferentes contextos y aplicaciones.<br>
Testeabilidad: al separar las dependencias y utilizar interfaces o abstracciones, es más sencillo realizar pruebas unitarias y pruebas de integración.<br>

Para aplicar el principio de inversión de dependencia en un proyecto de desarrollo web, es necesario seguir algunas pautas:

Definir interfaces o abstracciones: en lugar de depender de implementaciones concretas, se deben crear interfaces o abstracciones que representen las funcionalidades requeridas por los módulos de alto nivel.<br>
Implementar los módulos de nivel inferior: los módulos de nivel inferior, que contienen la implementación concreta de las funcionalidades requeridas, deben implementar las interfaces definidas anteriormente.<br>

[**Regresar**](./00-intro.md)
