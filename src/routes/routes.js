import { HomePageComponent } from '../pages/home/HomePageComponent';
import EditionProgramPage from '../pages/Program/EditionProgramPage';
import ListOfProgramsPageComponent from '../pages/Program/ListOfProgramsPageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';
import FormCreateProgram from './../pages/Program/components/FormCreateProgramComponent'

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

      {
        path: 'crearprograma',
        name: 'crearprograma',
        component: <FormCreateProgram/> 
      }

    ],
  },
];
