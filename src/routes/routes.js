import { HomePageComponent } from '../pages/home/HomePageComponent';
import { WelcomePageComponent } from '../pages/welcome/WelcomePageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';

export const routesApp = [

	{
		path: '/welcome',
		name: 'Welcome',
		component: <WelcomePageComponent/>
	},
	{
		path: '/dashboard',
		name: 'DashBoard',
		component: <DashBoardPageComponent />,
		child: [
			{
				path: 'logout',
				name: 'Log Out',
				component: <HomePageComponent />,
			},
			{
				path: 'trainingstory',
				name: 'Training Story',
				component: <h1>Training Story</h1>,
			},
			{
				path: 'activeprograms',
				name: 'Active Programs',
				component: <h1>Active Programs</h1>,
			},
			{
				path: 'program',
				name: 'Create Program',
				component: <h1>Create Program</h1>,
			},
		],
	}
];
