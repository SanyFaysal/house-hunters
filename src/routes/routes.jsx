import { createBrowserRouter } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import App from '../App';
import Home from '../pages/Home';

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
