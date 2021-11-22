#Propuesta de arquitectura Frontend

## LIBRERIAS

`React , react-Redux , react-Thunk, react-router-dom , Firebase`

## ESTRUCTURA DE CARPETAS

    ├── src
    │   ├── api
    │   ├── common
    │   ├── config
    │   ├── environments
    │   ├── pages
    │   ├── routes
    │   ├── state
    │   └── thunkAction.js

### `api`

    se propone que en este folder vaya todo tipo de peticiones http , debe ir un archivo con el nombre o contexto de las peticiones.
    asi por cada entidad o modelo que se tenga un archivo .js que consuma las apis en ese contexto
    ├── api
    │   ├── exampleRequest.js
    │   ├── cursosRequest.js
    │   └── programasRequest.js

### `common`

    se propone que en este folder vaya todos los componentes que se utilizaran en varios componentes o Pages o que no tiene la necesidad de ser agregados en el page File
    ├── common
    │   ├── ButtonsExample.jsx
    │   ├── PageExample.jsx
    │   └── Footer.jsx

### `config`

    aqui se propone que vaya todo lo referente a configuraciones
    ├── config
    │   ├── firebase.config.js
    │   └── example.config.js

### `environments`

    aqui todas las variables de entorno se agregaran al ya archivo environment existente como un atributo del objeto de este archivo
    ├── environments
    │   └── environment.js

### `pages`

    aqui se propone que vallan todos los componentes grandes con una estructura de Una carpeta con el nombre de la componente y adentro una Page componente con el contexto de este componente adicionalmente un folder llamado componnets
    ├── pages
    │   ├── CursosPage
    │   │   ├── CursosPageComponent.js
    │   │   └── components
    │   │       └── CursosFormComponent.jsx
    │   └── HomePage
    │       ├── components
    │       │   ├── ArticleListComponent.jsx
    │       │   ├── CategoryComponent.jsx
    │       │   └── HomePageComponent.jsx
    │       └── HomePageContainer.js

### `routes`

    aqui hay un archivo llamado routes donde cada equipo podra agregar sus rutas a un objeto javascript sin tener que tocar el componente de rutas y la estructura llevara solo el archivo routes y el PrivateRoute
    ├── routes
    │       │   ├── PrivateRoutes.js
    │       │   └── routes.js

```javascript
export const routesApp = [
  {
    path: '/home',
    name: 'Home',
    component: <HomePageComponent />,
    exact: true,
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: <CursoPageComponent />,
    exact: true,
  },
];
```

### `state`

    en este apartado ira todo lo que respecta al redux y los estados
    ├── state
    │   ├── article
    │   │   ├── articleActions.js
    │   │   └── articleReducer.js
    │   ├── category
    │   │   ├── categoryActions.js
    │   │   └── categoryReducer.js
    │   ├── store.js
    │   └── user
    │       ├── userActions.js
    │       └── userReducer.js

### `thunkAction`

    en construccion .........

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

s
To learn React, check out the [React documentation](https://reactjs.org/).

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
