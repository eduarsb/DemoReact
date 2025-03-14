# React + TypeScript + Vite

Este proyecto es una plantilla mínima para configurar React con Vite, utilizando HMR y algunas reglas de ESLint. Además, hace uso de hooks y Redux para el manejo del estado.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Uso de Hooks y Redux

Este proyecto utiliza hooks de React para manejar el estado y efectos secundarios, y Redux para el manejo del estado global.

## Comandos

### Desarrollo

Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:

```sh
npm run dev
```

### Construcción

Para construir el proyecto para producción, utiliza el siguiente comando:

```sh
npm run build
```

## Expandiendo la configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas específicas de lint para React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
