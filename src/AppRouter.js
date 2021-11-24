import { Routes, Route, HashRouter } from 'react-router-dom';
import LoginPageComponent  from './pages/login/LoginPageComponent';
import PrivateRoutes from './routes/PrivateRoutes';
import PrivateStudentRoutes from './routes/PrivateStudentRoutes';
import { routesApp, studentRoutesApp } from './routes/routes';

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
							{console.log(route.child)}

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

				{studentRoutesApp.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<PrivateStudentRoutes>{route.component}</PrivateStudentRoutes>}
						>
							{console.log(route.child)}

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
