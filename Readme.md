# Creación de un front "Pro"

## Instalamos vite
npm create vite@latest . con esto lo instalamos en la carpeta en la que estamos

## Instalamos eslint
<https://eslint.org/>

- ESLint

```shell
npm init @eslint/config@latest
```

Actualizamos package.json y probamos el linter

```json
  "scripts": {
    ...
    "lint": "eslint . --fix"
  },
```
## Componentes vanilla

    Vanilla Component

    1. Función
    2. Define un selector (custom element)
    3. Define un template (string)
    4. Renderiza el template en el selector
        - innerHTML (estilo Angular)
        - outerHTML (estilo React)
    5. Agrega lógica (eventos, etc.)
 

