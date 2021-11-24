import { CourseDetail } from '../pages/coursedetail/CourseDetail';
import CoursesListComponent from '../pages/courseslist/CoursesListComponent';
import { HomePageComponent } from '../pages/home/HomePageComponent';
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
        path: 'courseslist',
        name: 'courseslist',
        component: <CoursesListComponent />,
      },
      {
        path: 'coursedetail/:courseid',
        name: 'coursedetail',
        component: <CourseDetail />,
      },
    ],
  },
];
