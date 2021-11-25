import { HomePageComponent } from '../pages/home/HomePageComponent';
import Welcome from '../pages/dashboard/components/welcome/Welcome.jsx'
import { DashBoardPageComponent, DashBoardApprenticeComponent } from './../pages/dashboard/DashBoardPageComponent';
import TrainingListPageComponent from '../pages/trainingListPage/TrainingListPageComponent.jsx';

export const routesApp = [

	{
		path: '/dashboard',
		name: 'DashBoard',
		component: <DashBoardPageComponent />,
		child: [
			{
				path: 'home',
				name: 'Home',
				component: <Welcome />,
			},
			{
				path: 'logout',
				name: 'Log Out',
				component: <HomePageComponent />,
			},
			{
				path: 'trainingstory',
				name: 'Training Story',
				component: <h1>TRAINING STORY</h1>,
			},
			{
				path: 'activeprogram',
				name: 'Active Program',
				component: <h1>Active Program</h1>,
			},
			{
				path: 'program',
				name: 'Create Program',
				component: <h1>Create Program</h1>,
			},
			{
				path: 'programstory',
				name: 'Program Story',
				component: <h1>Program Story</h1>,
			},
			{
				path: 'activetrainingcoach', 
				name: 'Active Training',
				component: <TrainingListPageComponent/>,
			},
			{
				path: 'training',
				name: 'Create Training',
				component: <h1>Create Training</h1>,
			},
		],
	}
];

export const apprenticeRoutesApp = [
	
	{
		path: '/dashboard/apprentice',
		name: 'DashBoard',
		component: <DashBoardApprenticeComponent />,
		child: [
			{
				path: 'logout',
				name: 'Log Out',
				component: <HomePageComponent />,
			},
			{
				path: 'activetraining',
				name: 'Active Training',
				component: <h1>Active Training</h1>,
			}
		],
	}
];

export const studentRoutesApp = [
	
	{
		path: '/dashboard/student',
		name: 'DashBoard',
		component: <DashBoardApprenticeComponent></DashBoardApprenticeComponent>,
		child: [
			{
				path: 'logout',
				name: 'Log Out',
				component: <HomePageComponent />,
			},
			{
				path: 'exemple',
				name: 'Otra Ruta',
				component: <h1>Otra Ruta de Estudiante</h1>,
			}
		],
	}
];
