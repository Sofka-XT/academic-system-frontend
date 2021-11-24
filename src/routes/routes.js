import { HomePageComponent } from '../pages/home/HomePageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';
import { CreateCoursePageComponent } from './../pages/createCourse/CreateCoursePageComponent';

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
        path: 'create/course',
        name: 'courseCreate',
        component: <CreateCoursePageComponent />,
      },
    ],
  },
];
