## Estructura de proyecto

## Glosario
Comencemos enfatizando que Redux no tiene relación alguna con React. Puedes escribir aplicaciones Redux con React, Angular, Ember, jQuery o vanilla JavaScript.

### **Acciones**
Son un bloque de información que envía datos desde tu aplicación a tu **store**. For example, a chat application might have this action:
```js
{
  type: 'ADD_MESSAGE',
  channel_id: 'channel-1',
  message: 'Hello there!'
}
```

### **Estado**
Es un objeto que describe aspectos de la aplicación que cambian en el tiempo. For example, our chat application might have this state:
```js
{
  userId: 'user-1234',
  username: 'Adam',
  messages: [{
    user: 'Adam',
    message: 'Hi',
  },
  {
    user: 'Sarah',
    message: 'Hello there!',
  }],
}
``` 
### **Funciones puras**
Pure functions can't do any of the following:
1. Access global variables
1. Change global variables
1. Mutate its arguments
1. Perform side effects (like make API calls)
1. Call any other impure function (like date and random functions)

### **Reducer**
Las **acciones** describen que *algo pasó*, pero no especifican cómo cambió el **estado** de la aplicación en respuesta. Esto es trabajo de los **reducers**.

Los reducers son **funciones puras** que toman el **estado** anterior y una **acción**, como dos parámetros: `state` y `action`, y devuelven un nuevo **estado**. 
```js
(previousState, action) => newState
```

The action describes what happened and it is the reducer's job to return the new state based on that action. [:link:](https://www.pluralsight.com/guides/how-to-write-redux-reducer)
```js
const initialState = {
  username: '',
  messages: [],
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.username,
      }
    default:
      return state
  }
}
```

### **Store**
Las **acciones** que representan los hechos sobre *"lo que pasó"* y los *reductores* son los que actualizan el **estado** de acuerdo a esas acciones. El **Store** es el objeto que los reúne. El store tiene las siguientes responsabilidades:

* Contiene el estado de la aplicación;
* Permite el acceso al estado via `getState();`
* Permite que el estado sea actualizado via `dispatch(action);`
* Registra los listeners via `subscribe(listener);`
* Maneja la anulación del registro de los listeners via el retorno de la función de `subscribe(listener).`


### **Middleware**
allows you to intercept every action sent to the **reducer** so you can make changes to the **action** or cancel the **action**. [:link:](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)

<img width="50%" src="https://res.cloudinary.com/practicaldev/image/fetch/s--lF-P3FT5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdr2pgv8ax9iqilbgqj2.png">
