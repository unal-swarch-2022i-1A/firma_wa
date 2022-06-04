# Dependencies
A continuación se describen las dependencias usadas en este proyecto y su propósito. Todas las referencias son de https://www.npmjs.com/

## react
[Acerca de react](./about_react.md)
> The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

### react-dom
> This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

### react-popper
> React wrapper around [Popper](https://popper.js.org/). 
> **important note:** Popper is not a tooltip library, it's a *positioning engine* to be used to build features such as (but not restricted to) tooltips.

### react-redux
> Official React bindings for [Redux](https://github.com/reduxjs/redux). Performant and flexible.

### react-redux-form
> React Redux Form is a collection of reducer creators and action creators that make implementing even the most complex and custom forms with React and Redux simple and performant.

### react-router-dom
> The react-router-dom package contains bindings for using [React Router](https://github.com/remix-run/react-router) in web applications.

### react-scripts
> This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).

### react-transition-group
> A set of components for managing component states (including mounting and unmounting) over time, specifically designed with animation in mind.

### react-animation-components
> A set of React components using **React Transition Group** to provide drop in GPU accelerated animations and wrappers for group effects.

## redux
[Acerca de redux](./about_redux.md)
> Redux is a predictable state container for JavaScript apps.
> It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

### redux-logger
> Now maintained by LogRocket!
> LogRocket is a production Redux logging tool that lets you replay problems as if they happened in your own browser. Instead of guessing why errors happen, or asking users for screenshots and log dumps, LogRocket lets you replay Redux actions + state, network requests, console logs, and see a video of what the user saw.

### redux-thunk
> Thunk [middleware](./about_redux.md#middleware) for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

## web-vitals
The `web-vitals` library is a tiny (~1K), modular library for measuring all the [Web Vitals](https://web.dev/vitals/) metrics on real users, in a way that accurately matches how they're measured by Chrome and reported to other Google tools.

## bootstrap
> Sleek, intuitive, and powerful front-end framework for faster and easier web development. Our default branch is for development of our Bootstrap 5 release.

### bootstrap-social
> Social Buttons made in pure CSS based on **Bootstrap** and **Font Awesome!**

### reactstrap
> Stateless React Components for Bootstrap 5.

## font-awesome
> Font Awesome is a full suite of 675 pictographic icons for easy scalable vector graphics on websites, created and maintained by Dave Gandy.

## prop-types
> Runtime type checking for React props and similar objects.
> You can use prop-types to document the intended types of properties passed to components. React (and potentially other libraries—see the `checkPropTypes()` reference below) will check props passed to your components against those definitions, and warn in development if they don’t match.

## cross-fetch
> Universal WHATWG Fetch API for Node, Browsers and React Native. The scenario that cross-fetch really shines is when the same JavaScript codebase needs to run on different platforms.
> * Platform agnostic: browsers, Node or React Native
> * Optional polyfill: it's up to you if something is going to be added to the global object or not
> * Simple interface: no instantiation, no configuration and no extra dependency
> * WHATWG compliant: it works the same way wherever your code runs
> * TypeScript support: better development experience with types.

## @testing-library/jest-dom
> The @testing-library/jest-dom library provides a set of custom [jest](https://jestjs.io/) matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

## @testing-library/react
> The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. I

## @testing-library/user-event
> user-event tries to simulate the real events that would happen in the browser as the user interacts with it. For example userEvent.click(checkbox) would change the state of the checkbox.