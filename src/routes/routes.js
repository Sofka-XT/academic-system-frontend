import { HomePageComponent } from '../pages/home/HomePageComponent';
import ListOfProgramsPageComponent from '../pages/program/ListOfProgramsPageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';

export const routesApp = [
  {
    path: '/home',
    name: 'Home',
    component: <HomePageComponent />,
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: <DashBoardPageComponent />,
    child: [
      {
        path: 'casa',
        name: 'casa',
        component: <HomePageComponent />,
      },
      {
        path: 'programs',
        name: 'programs',
        component: <ListOfProgramsPageComponent/>
      },
    ],
  },
];
