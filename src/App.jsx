import { useDispatch } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { fetchUser } from './redux/user/userSlice';

function App() {
  const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(token));
  }, [token, dispatch]);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
