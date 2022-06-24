// React base
import React from 'react';
import ReactDOM from 'react-dom';
// Front-end CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Social CSS buttons
import 'bootstrap-social/bootstrap-social.css';
// App Component
import App from './App';

import registerServiceWorker from './registerServiceWorker';


/**
 * @param element The component we want to render, 
 * @param container The DOM element inside which we want the component to be rendered
 */
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
