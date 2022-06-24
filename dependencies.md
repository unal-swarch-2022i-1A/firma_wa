# Dependencies
A continuación se describen las dependencias usadas en este proyecto y su propósito. Todas las referencias son de https://www.npmjs.com/

## Clean installation

## react
[Acerca de react](./about_react.md)
> The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

### React 18 - 29th, 2022
> Warning: `ReactDOM.render` is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

### react-dom
> This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

### react-scripts
> This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).

## web-vitals
The `web-vitals` library is a tiny (~1K), modular library for measuring all the [Web Vitals](https://web.dev/vitals/) metrics on real users, in a way that accurately matches how they're measured by Chrome and reported to other Google tools.

## @testing-library/jest-dom
> The @testing-library/jest-dom library provides a set of custom [jest](https://jestjs.io/) matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

## @testing-library/react
> The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. I

## @testing-library/user-event
> user-event tries to simulate the real events that would happen in the browser as the user interacts with it. For example userEvent.click(checkbox) would change the state of the checkbox.
