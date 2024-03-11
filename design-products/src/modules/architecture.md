# Arquitectura de CAPAS

La Arquitectura es un enfoque organizativo que divide una aplicación en capas distintas, cada una con un propósito específico. A continuación, se describe la estructura de los módulos y archivos bajo esta arquitectura:

- modulos
  - common ...
  - [name-modulo]
    - services
      - [name-modulo].usecase.service.ts
    - models
      - [name-modulo].interface.model.ts
      - [name-modulo].interface.repository.ts
    - logic
      - [name-modulo].repository.mysql.ts
    - dependencies
      - [name-modulo].dependence.ts
- setting
  - db.setting.ts
  - env.setting.ts

## Modulos

`common:` modulos comunes <br>

`[name-modulo]:`<br>

- services: Contiene el servicio principal relacionado con el módulo, que ejecuta funciones como crear, modificar, eliminar, actualizar y otros procesos esenciales.

- modelos: Define las estructuras para la comunicación entre procesos, utilizando clases, clases abstractas o interfaces para facilitar la interoperabilidad.

- logica: Representa la capa de bajo nivel que implementa la lógica específica de los distintos procesos dentro del módulo. Aquí se encuentra la implementación concreta de las operaciones definidas en la capa de servicios.

- Proveedor: Esta capa se encarga de gestionar la comunicación externa con otros módulos. Proporciona servicios que el módulo puede ofrecer a otras partes del sistema.

- Dependencies: Registrar las instancias de los objetos para su inyección

- Documents: Guía rápida y simple del modulo.

## Setting

- db.setting.ts: Archivo de configuración relacionado con la base de datos, donde se pueden especificar parámetros como la conexión, credenciales y otros ajustes pertinentes.

- env.setting.ts: Archivo de configuración que almacena variables de entorno y ajustes generales de la aplicación.
