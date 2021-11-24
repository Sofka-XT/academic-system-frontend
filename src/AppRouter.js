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

<<<<<<< HEAD
				{studentRoutesApp.map((route, index) => {
=======
				{apprenticeRoutesApp.map((route, index) => {
>>>>>>> 545677851e281cfb0b2cd6e534aefbb3a585fcc3
					return (
						<Route
							key={index}
							path={route.path}
<<<<<<< HEAD
							element={<PrivateStudentRoutes>{route.component}</PrivateStudentRoutes>}
=======
							element={<PrivateApprenticeRoutes>{route.component}</PrivateApprenticeRoutes>}
>>>>>>> 545677851e281cfb0b2cd6e534aefbb3a585fcc3
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
