# Acerca React
## Directorios
Con `Create React App` ([Github](https://github.com/facebook/create-react-app)) por defecto se crea la siguiente estructura
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

El directorio `public`  contiene los archivos en los cuales react inyectará código para la ejecución y compilación.

En el directorio `src` esta todo el código fuente.

## Glosario de React

### **JSX**
JSX abrevia JavaScript XML.

En React JSX te permite escribir HTML y colocarlos en el DOM sin necesidad de `createElement()` o `appendChild()`.

JSX convierte etiquetas HTML en elementos react.

https://reactjs.org/docs/introducing-jsx.html

### **Componentes**

En react, un componente es un modulo reusable que renderiza una parte de la aplicación. Estas partes pueden ser grandes o pequeñas, pero siempre con claramente definidas.

Hay básicamente dos maneras de escribir componentes en React: componentes basados en funciones y componentes basados en clases.

Los **componentes basados en funciones** también llamados **stateless components** porque no actualizan cambios aplicados. Son funciones planas que aceptan **Props** como un argumento y devuelven un elemento React.

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits.


Los **componentes basados en clases** también llamados **stateful components** requieren que se extienda la clase `Component` de React e implementar la función `render()` la cual devuelve el elemento React. Esto implica mas código para también da algunos beneficios como `lifecycle hooks`.



|                           | **Componentes de Presentación**                       | **Componentes Contenedores**                                              |
| ---                       | ---                                                   | ---                                                                       |
| **Propósito**             | Como se ven las cosas (markup, estilos)               | Como funcionan las cosas (búsqueda de datos, actualizaciones de estado)   |
| **Pertinente a Redux**    | No                                                    | Yes                                                                       |
| **Para leer datos**       | Lee datos de los **props**                            | Se suscribe al estado en **Redux**                                        |
| **Para manipular datos**  | Invoca llamada de retorno (callback) desde los props  | Envía acciones a **Redux**                                                |
| **Son escritas**          | Manualmente                                           | Usualmente generados por **React Redux**                                  |

### **Props**
> A prop is any data passed into a React component. React props are comparable to HTML attributes. Where HTML elements have attributes, React components have props. Props are written inside component calls, and use the same syntax as HTML attributes — prop="value". In React, dataflow is unidirectional: props can only be passed from Parent components down to Child components; and props are read-only.

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

### **Hooks**

## Webpack