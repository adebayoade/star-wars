import { RouteObject } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import NotFound from './pages/not-found';
import AuthLayout from './layouts/auth-layout';
import Login from './pages/auth/login';
import DashboardLayout from './layouts/dashboard-layout';
import Overview from './pages/dashboard/overview';
import StarShips from './pages/dashboard/starships';
import People from './pages/dashboard/people';
import Species from './pages/dashboard/species';
import SinglePerson from './pages/dashboard/people/[id]';
import SingleFilm from './pages/dashboard/films/[id]';
import SingleSpecies from './pages/dashboard/species/[id]';
import SingleStarship from './pages/dashboard/starships/[id]';
import Films from './pages/dashboard/films';
// import HomeScreen from './pages/home';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      // {
      //   index: true,
      //   element: <HomeScreen />,
      // },
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            element: <Login />,
          },
          {
            path: '/login',
            element: <Login />,
          },
        ],
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: '/dashboard/starships',
            element: <StarShips />,
          },
          {
            path: '/dashboard/starships/:id',
            element: <SingleStarship />,
          },
          {
            path: '/dashboard/people',
            element: <People />,
          },
          {
            path: '/dashboard/people/:id',
            element: <SinglePerson />,
          },
          {
            path: '/dashboard/species',
            element: <Species />,
          },
          {
            path: '/dashboard/species/:id',
            element: <SingleSpecies />,
          },
          {
            path: '/dashboard/films',
            element: <Films />,
          },
          {
            path: '/dashboard/films/:id',
            element: <SingleFilm />,
          },
          // Dashboard 404 page
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
      // Global 404 page
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
