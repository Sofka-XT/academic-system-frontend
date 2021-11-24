import { Routes, Route, HashRouter } from 'react-router-dom';
import LoginPageComponent  from './pages/login/LoginPageComponent';
import PrivateApprenticeRoutes from './routes/PrivateApprenticeRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { apprenticeRoutesApp, routesApp} from './routes/routes';

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
							{route.child &&
								route.child.map((element, index) => (
									<Route
										key={index}
										path={element.path}
										element={element.component}
									/>
								))}
								
						</Route>
					);
				})}

				{apprenticeRoutesApp.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<PrivateApprenticeRoutes>{route.component}</PrivateApprenticeRoutes>}
						>
							{route.child &&
								route.child.map((element, index) => (
									<Route
										key={index}
										path={element.path}
										element={element.component}
									/>
								))}
								
						</Route>
					);
				})}
			</Routes>
		</HashRouter>
	);
};
