import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import App from '../App';
import Home from '../pages/Home';
import Dashboard from '../layouts/Dashboard';
import PostedHouse from '../components/OwnerDashboardComponent/PostedHouse';
import AddNewHouse from '../components/OwnerDashboardComponent/AddNewHouse';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <PostedHouse />,
      },
      {
        path: 'addHouse',
        element: <AddNewHouse />,
      },
      {
        index: true,
        element: <PostedHouse />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
