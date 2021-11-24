import { HomePageComponent } from "../pages/home/HomePageComponent";
import { DashBoardPageComponent } from "./../pages/dashboard/DashBoardPageComponent";
import FormInputTrainingComponent from "./../pages/crudTraning/components/FormInputTrainingComponent";
export const routesApp = [
  {
    path: "/home",
    name: "Home",
    component: <HomePageComponent />,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: <DashBoardPageComponent />,
    child: [
      {
        path: "casa",
        name: "casa",
        component: <HomePageComponent />,
      },
      {
        path: "createTraining",
        name: "formInputTraining",
        component: <FormInputTrainingComponent />,
      },
    ],
  },
];
