import { HomePageComponent } from '../pages/home/HomePageComponent';
import Welcome from '../pages/dashboard/components/welcome/Welcome.jsx';

import DashBoardPageComponent from './../pages/dashboard/DashBoardPageComponent';
import TrainingListPageComponent from '../pages/trainingListPage/TrainingListPageComponent.jsx';
import { CreateCoursePageComponent } from './../pages/createCourse/CreateCoursePageComponent';
import EditCoursePageComponent from './../pages/createCourse/Components/EditCoursePageComponent';
import CoursesListComponent from './../pages/courseslist/CoursesListComponent';
import CourseDetail from './../pages/coursedetail/CourseDetailComponent';


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
        component: <TrainingListPageComponent />,
      },
      {
        path: 'training',
        name: 'Create Training',
        component: <h1>Create Training</h1>,
      },
      {
        path: 'create/course',
        name: 'Create curso',
        component: <CreateCoursePageComponent />,
      },
      {
        path: 'edit/course/:courseId',
        name: 'Create curso',
        component: <EditCoursePageComponent />,
      },
      {
        path: 'courseslist',
        name: 'Courses List',
        component: <CoursesListComponent />,
      },
      {
        path: 'courseslist/coursedetail/:courseid',
        name: 'Course Detail',
        component: <CourseDetail />,
      },
    ],
  },
];

export const apprenticeRoutesApp = [
  {
    path: '/dashboard/apprentice',
    name: 'DashBoard',
    component: <DashBoardPageComponent />,
    child: [
      {
        path: 'home',
        name: 'Home',
        component: <TrainingListPageComponent />,
      },
      {
        path: 'logout',
        name: 'Log Out',
        component: <HomePageComponent />,
      },
      {
        path: 'activetraining',
        name: 'Active Training',
        component: <TrainingListPageComponent />,
      },
      {
        path: 'courseslist',
        name: 'List Course',
        component: <CoursesListComponent />,
      },
      {
        path: 'courseslist/coursedetail/:courseid',
        name: 'Course Detail',
        component: <CourseDetail />,
      },
    ],
    
  },
];

