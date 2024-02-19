# Instalación del Entorno

- Paso 1 instalación de librería inicial

```bash
    npm init -y

    npm install typescript ts-node-dev --save-dev

    npx tsc --init

```

- Paso 2 modifica el archivo tsconfig.json

```bash

  {
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "es2020",
    "lib": ["es2020"],
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "types": ["node"],
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
    },
    "exclude": ["node_modules"]
  }

```

- Paso 3 Instalación de los tipos(Typescript) de NODE

```bash
npm install @types/node --save-dev
```

- Paso 4 Proporciona los comandos para ejecutar el proyecto se modifica el archivo package.json:

```bash

"scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node build/index.js"
},

```

- Paso 5 Instalar git del siguiente sitio [https://git-scm.com/](https://git-scm.com/)

  1. Cree una carpeta de su disco
  2. Abrir la carpeta en cmd
  3. Clonar el repositorio
     ```bash
     Clonar:    git clone https://github.com/gposoft/dev-workspace.git
     ```
  4. Entre a la carpeta dev-workspace
     ```bash
      ...\cd dev-workspace
     ```
  5. Para estar actualizados de los archivos/códigos
     ```bash
      Actualiza: git pull origin main
     ```

# Ahora cierre el proyecto al final de la clase puede hacer pull o en cualquier hora ya que se encuentra en la nube 