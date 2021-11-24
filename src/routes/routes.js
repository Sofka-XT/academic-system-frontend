import { HomePageComponent } from '../pages/home/HomePageComponent';
import EditionProgramPage from '../pages/program/EditionProgramPage';
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
        path: 'programs/editProgram',
        name: 'editProgram',
        component: <EditionProgramPage />,
      },
      {
        path: 'programs',
        name: 'programs',
        component: <ListOfProgramsPageComponent/>
      },
    ],
  },
];
