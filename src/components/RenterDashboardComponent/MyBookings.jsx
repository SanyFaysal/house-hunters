// import { Link } from 'react-router-dom';

import BookingCard from './BookingCard';

// import { toast } from 'react-hot-toast';

const MyBookings = () => {
  return (
    <div className="bg-white p-5  rounded-lg my-2">
      <div className="flex justify-between">
        <h1 className=" font-semibold">All of Bookings </h1>
        <h1 className=" font-semibold">Total : 02 </h1>
      </div>
      <BookingCard />
      <BookingCard />
    </div>
  );
};

export default MyBookings;
