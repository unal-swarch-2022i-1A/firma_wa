# Firma frontend 
## The Clean architecture
https://khalilstemmler.com/articles/client-side-architecture/architecture
https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/
https://boom.co/resources/what-you-need-to-know-about-complex-react-architecture/
```
└── /src
    ├── /assets
    ├── /presentation
    |   ├── /pages
    |   ├── /module1
    |   |   ├── /pages
    |   |   ├── /components
    |   |   ├── /context
    |   |   └── /hooks
    |   ├── /module2
    |   |   ├── /pages
    |   |   ├── /components
    |   |   ├── /context
    |   |   └── /hooks
    |   └── /shared
    |       ├── /components
    |       ├── /context
    |       ├── /hooks
    |       └── /utils
    ├── /application
    |   ├── /types
    |   ├── /services
    |   └── /redux
    ├── /infrastructure
    |   ├── /api
    |   |   ├── /mappers
    |   |   └── /dtos
    |   ├── /websocket
    |   |   ├── /mappers
    |   |   └── /dtos
    |   └── /otherservice
    |       ├── /mappers
    |       └── /dtos
    ├── App.ts
    ├── Routes.ts
    └── index.ts
```