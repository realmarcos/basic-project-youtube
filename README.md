## Projeto NodeJS em Typescript básico com as confiurações inicials

### Meu package.json

```
"build": "tsc",
"start": "nodemon dist/server.js",
"dev": "ts-node-dev --ignore node_modules src/server.ts",
"test": "vitest",
"lint": "eslint --fix src/**"
```

### Comandos

Iniciar package.json
```
npm init -y
```

Instalar Typescrip e ts-node-dev
```
npm install typescript ts-node-dev @types/node --save-dev
```

Iniciar tsconfig.json
```
npx tsc --init
```

Confiurar eslint
```
npm init @eslint/config
```

Instalar express
```
npm install express
npm i --save-dev @types/express
```

Instalar nodemon
```
npm install --save-dev nodemon
```

Instalar vitest
```
npm install -D vitest
```

Instalar dotenv
```
npm install dotenv --save
```