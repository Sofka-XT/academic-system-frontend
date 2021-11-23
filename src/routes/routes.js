import { HomePageComponent } from '../pages/home/HomePageComponent';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';
import PostPageComponent from './../pages/post/PostPageComponent';

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
        path: 'post',
        name: 'post',
        component: <PostPageComponent />,
      },
    ],
  },
  {
    path: '/post',
    name: 'post',
    component: <PostPageComponent />,
  },
];
