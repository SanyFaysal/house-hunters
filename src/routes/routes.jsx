import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import App from '../App';
import Home from '../pages/Home';
import Dashboard from '../layouts/Dashboard';

import AddNewHouse from '../components/OwnerDashboardComponent/AddNewHouse';
import MyHouses from '../components/OwnerDashboardComponent/MyHouses';
import EditHouse from '../components/OwnerDashboardComponent/EditHouse';
import MyBookings from '../components/RenterDashboardComponent/MyBookings';
import HouseDetails from '../components/houseComponent/HouseDetails';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'house/:id',
        element: <HouseDetails />,
      },

      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },

      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <MyHouses />,
          },
          {
            path: 'myHouses',
            element: <MyHouses />,
          },
          {
            path: 'addHouse',
            element: <AddNewHouse />,
          },
          {
            path: 'editHouse/:id',
            element: <EditHouse />,
          },
          {
            path: 'myBookings',
            element: <MyBookings />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
