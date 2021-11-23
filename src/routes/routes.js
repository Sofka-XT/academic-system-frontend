import ListaTrainingsComponent from '../pages/activeTrainingPrueba/ListaTrainingsComponent';
import { HomePageComponent } from '../pages/home/HomePageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';
import TrainingListPageComponent from '../pages/trainingListPage/TrainingListPageComponent.jsx'

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
        path: 'trainingList',
        name: 'trainingList',
        component: <TrainingListPageComponent/>

      }
    ],
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: <ListaTrainingsComponent />,
  }
];
