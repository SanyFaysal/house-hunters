// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import BookingCard from './BookingCard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { toast } from 'react-hot-toast';

const MyBookings = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user?.email) {
      navigate('/login');
    }
  }, [user, navigate]);
  return (
    <div className="bg-white p-5  rounded-lg my-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className=" font-semibold">All of Bookings </h1>
        <button className=" px-3 py-1 bg-orange-50 rounded-lg text-orange-400">
          Free up space
        </button>
      </div>
      <BookingCard />
      <BookingCard />
    </div>
  );
};

export default MyBookings;
