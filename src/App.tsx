import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import HomeScreen from './pages/home';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}

      <Route element={<MainLayout />}>
        <Route element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/starships" element={<StarShips />} />
          <Route path="/dashboard/starships/:id" element={<SingleStarship />} />
          <Route path="/dashboard/people" element={<People />} />
          <Route path="/dashboard/people/:id" element={<SinglePerson />} />
          <Route path="/dashboard/species" element={<Species />} />
          <Route path="/dashboard/species/1" element={<SingleSpecies />} />
          <Route path="/dashboard/films/1" element={<SingleFilm />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
