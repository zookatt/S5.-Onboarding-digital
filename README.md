# S.5 Onboarding Digital
Este proyecto de React se enfoca en la implementación de un proceso de onboarding digital con varios pasos. La aplicación utiliza componentes para mostrar información relevante en cada paso y ofrece funcionalidades de navegación y visualización del progreso del usuario.

## Ejercicios Realizados

### Ejercicio 1
Creación del componente Card.
Integración del componente Card en App.
Definición del array *tutorialData* en App para almacenar la información de cada paso.
Implementación del primer estado con useState para rastrear el paso actual.
Paso de datos al componente Card mediante props para mostrar la información del primer paso.

### Ejercicio 2
Implementación de la función *nextStep* en App.tsx  para avanzar al siguiente paso.
Paso de la función *nextStep* al componente Card mediante props para ejecutarla al hacer clic en un botón.

### Ejercicio 3
Maquetación del componente Card para que sea responsive y se vea bien en diferentes dispositivos.

### Ejercicio 4
Programación de la funcionalidad que permite retroceder un paso en el tutorial.
Creación de la función *prevStep* en App.tsx.
Paso de la función *prevStep* al componente Card mediante props.
Utilización de renderizado condicional para mostrar y ocultar los botones de retroceso y avance.

### Ejercicio 5
Implementación de un indicador visual del paso actual.
Creación del componente Indicator.tsx.
Paso de la cantidad total de pasos y el paso actual al componente Indicator para visualizar dinámicamente el progreso.

### Ejercicio 6
Implementacion de funcionalidad de botones en el componente Indicator.tsx se muestre la frase correspondiente.

### Ejercicio 7
Creación de una animación entre los diferentes pasos de introducción con *useSpring* de *react-spring*.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
