# Dependencies
A continuación se describen las dependencias usadas en este proyecto y su propósito. Todas las referencias son de https://www.npmjs.com/

## Clean installation

### react
[Acerca de react](./about_react.md)
> The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

#### React 18 - 29th, 2022
> Warning: `ReactDOM.render` is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

#### react-dom
> This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

#### react-scripts
> This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).

### web-vitals
The `web-vitals` library is a tiny (~1K), modular library for measuring all the [Web Vitals](https://web.dev/vitals/) metrics on real users, in a way that accurately matches how they're measured by Chrome and reported to other Google tools.

### @testing-library/jest-dom
> The @testing-library/jest-dom library provides a set of custom [jest](https://jestjs.io/) matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

### @testing-library/react
> The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. I

### @testing-library/user-event
> user-event tries to simulate the real events that would happen in the browser as the user interacts with it. For example userEvent.click(checkbox) would change the state of the checkbox.

## Material Design

### @mui/material
> MUI Core contains foundational React UI component libraries for shipping new features faster.
> * Material UI is a comprehensive library of components that features our implementation of Google's Material Design system.
> * Joy UI is a beautifully designed library of React UI components.
> * MUI Base is our library of "unstyled" components and low-level hooks. With Base, you gain complete control over your app's CSS and accessibility features.
> * MUI System is a collection of CSS utilities to help you rapidly lay out custom designs.

### @emotion/react
> Simple styling in React.

### @emotion/styled
> The styled API for @emotion/react

### @mui/icons-material
> Google has created over 2,000 official Material icons, each in five different "themes" (see below). For each SVG icon, we export the respective React component from the @mui/icons-material package. You can [search the full list of these icons](https://mui.com/material-ui/material-icons/).

### @fontsource/roboto
> The Roboto font will not be automatically loaded by MUI. You are responsible for loading any fonts used in your application. 

## Routing

### react-router-dom@6
> The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.