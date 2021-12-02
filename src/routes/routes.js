import { LogOutPage } from "../pages/logout/LogOutPage";
import Welcome from "../pages/welcome/Welcome";
import DashBoardPageComponent from "./../pages/dashboard/DashBoardPageComponent";
import TrainingListPageComponent from "../pages/trainingListPage/TrainingListPageComponent.jsx";
import { CreateCoursePageComponent } from "./../pages/createCourse/CreateCoursePageComponent";
import EditCoursePageComponent from "./../pages/createCourse/Components/EditCoursePageComponent";
import CoursesListComponent from "./../pages/courseslist/CoursesListComponent";
import CourseDetail from "./../pages/coursedetail/CourseDetailComponent";
import EditionProgramPage from "../pages/program/EditionProgramPage";
import ListOfProgramsPageComponent from "../pages/program/ListOfProgramsPageComponent";
import FormCreateProgramPageComponent from "../pages/program/FormCreateProgramPageComponent";
import FormInputTrainingComponent from "./../pages/crudTraning/components/FormInputTrainingComponent";
import TrainingDetails from "../pages/trainingDetailsPage/TrainingDetails";
import ProfilePageComponent from "../pages/profile/ProfilePageComponent";

export const routesApp = [
  {
    path: "/dashboard",
    name: "DashBoard",
    component: <DashBoardPageComponent />,
    child: [
      {
        path: "home",
        name: "Home",
        component: <Welcome />,
      },
      {
        path: "logout",
        name: "Log Out",
        component: <LogOutPage/>,
      },
      {
        path: "activetrainingcoach",
        name: "Active Training",
        component: <TrainingListPageComponent />,
      },
      {
        path: "create/course",
        name: "Create curso",
        component: <CreateCoursePageComponent />,
      },
      {
        path: "edit/course/:courseId",
        name: "Create curso",
        component: <EditCoursePageComponent />,
      },
      {
        path: "courseslist",
        name: "Courses List",
        component: <CoursesListComponent />,
      },
      {
        path: "courseslist/coursedetail/:courseid",
        name: "Course Detail",
        component: <CourseDetail />,
      },
      {
        path: "programs/editProgram",
        name: "editProgram",
        component: <EditionProgramPage />,
      },
      {
        path: "programs",
        name: "programs",
        component: <ListOfProgramsPageComponent />,
      },

      {
        path: "crearprograma",
        name: "crearprograma",
        component: <FormCreateProgramPageComponent />,
      },
      {
        path: "createTraining",
        name: "formInputTraining",
        component: <FormInputTrainingComponent />,
      },
      {
        path: "traininglist/trainingdetail/:trainingid",
        name: "Training Detail",
        component: <TrainingDetails/>,
      },
      {
        path: "profile/:email",
        name: "Apprentice Profile",
        component: <ProfilePageComponent />,

      },
    ],
  },
];

export const apprenticeRoutesApp = [
  {
    path: "/dashboard/apprentice",
    name: "DashBoard",
    component: <DashBoardPageComponent />,
    child: [
      {
        path: "home",
        name: "Home",
        component: <TrainingListPageComponent />,
      },
      {
        path: "logout",
        name: "Log Out",
        component: <LogOutPage />,
      },
      {
        path: "activetraining",
        name: "Active Training",
        component: <TrainingListPageComponent />,
      },
      {
        path: "courseslist",
        name: "List Course",
        component: <CoursesListComponent />,
      },
      {
        path: "courseslist/coursedetail/:courseid",
        name: "Course Detail",
        component: <CourseDetail />,
      },
      {
        path: "traininglist/trainingdetail/:trainingid",
        name: "Training Detail",
        component: <TrainingDetails/>,
      },
      {
        path: "profile/:email",
        name: "Apprentice Profile",
        component: <ProfilePageComponent />,
      },
    ],
  },
];
