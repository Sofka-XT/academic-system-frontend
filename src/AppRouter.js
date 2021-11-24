import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { LoginPageComponent } from './pages/login/LoginPageComponent';

import { routesApp } from './routes/routes';
import PrivateRoutes from './routes/PrivateRoutes';
export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPageComponent />}></Route>
        {routesApp.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoutes>{route.component}</PrivateRoutes>}
            >
              {/* {console.log(route.child)} */}
              {route.child &&
                route.child.map((elemnet, index) => (
                  <Route
                    key={index}
                    path={elemnet.path}
                    element={elemnet.component}
                  />
                ))}
            </Route>
          );
        })}
      </Routes>
    </HashRouter>
  );
};
