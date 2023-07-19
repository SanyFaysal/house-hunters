import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  console.log(pathname);
  return (
    <div>
      {isHome && <Navbar />}
      <div className={`${isHome && 'pt-16'}`}>
        <Outlet />
      </div>
    </div>
  );
}
