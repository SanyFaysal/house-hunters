// import { Link } from 'react-router-dom';

import BookingCard from './BookingCard';

// import { toast } from 'react-hot-toast';

const MyBookings = () => {
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
