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
    "target": "ES2021",
    "lib": [
      "ES2021"
    ],
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "types": [
      "node"
    ],
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "exclude": [
    "node_modules"
  ]
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
1. Para poder correr el proyecto se debe hacer primero la instalación de los paquetes
     ```bash
      npm install
     ```
2. Manejo de variable de entorno
     ```bash
      npm i dotenv
      npm i pg 
      npm i @types/pg --save-dev
     ```
3. Test
     ```bash
      npm install -D vitest

      
      "scripts": {
        ...
        test:"vitest"
      },
     ```
4. Fakes
  ```bash
    npm install --save-dev @faker-js/faker
  ```
   
