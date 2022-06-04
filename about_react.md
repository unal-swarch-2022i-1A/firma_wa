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

## Glosario de React

### **Props**

### **Componentes**
|                           | **Componentes de Presentación**                       | **Componentes Contenedores**                                              |
| ---                       | ---                                                   | ---                                                                       |
| **Propósito**             | Como se ven las cosas (markup, estilos)               | Como funcionan las cosas (búsqueda de datos, actualizaciones de estado)   |
| **Pertinente a Redux**    | No                                                    | Yes                                                                       |
| **Para leer datos**       | Lee datos de los **props**                            | Se suscribe al estado en **Redux**                                        |
| **Para manipular datos**  | Invoca llamada de retorno (callback) desde los props  | Envía acciones a **Redux**                                                |
| **Son escritas**          | Manualmente                                           | Usualmente generados por **React Redux**                                  |

### **Hooks**