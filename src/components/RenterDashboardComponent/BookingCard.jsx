/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import house from '../../assets/house.jpg';

import { FiEye, FiTrash2 } from 'react-icons/fi';
import { useDeleteBookingMutation } from '../../redux/booking/bookingApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const BookingCard = ({ booking }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const [deleteBooking, { isLoading, data, isSuccess, isError, error }] =
    useDeleteBookingMutation();
  const handleBookingDelete = (id) => {
    deleteBooking({ id, token });
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'addHouse' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'addHouse' });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: 'addHouse' });
    }
  }, [isSuccess, isError, isLoading, error, data]);
console.log({booking})
  return (
    <div className="my-2 rounded ">
      <div className="grid grid-cols-8 gap-x-4 bg-gray-100 rounded-lg p-4 ">
        
        <div className="col-span-8">
          <div className="flex justify-between  gap-2">
            <div>
              <p className=" text-sm font-semibold">{booking?.house?.name}</p>
            </div>
            <div className="flex gap-2">
              {/* <p className=" btn btn-sm bg-white">
                <FiEdit2 className="text-xs inline hover:text-blue-500" /> Edit
              </p> */}
              <p
                onClick={() => navigate(`/house/${booking?.house?._id}`)}
                className=" btn btn-sm bg-white "
              >
                <FiEye className="text-sm hover:text-blue-500" />
                Details
              </p>
              <p
                onClick={() => handleBookingDelete(booking?._id)}
                className=" btn btn-sm bg-white normal-case"
              >
                <FiTrash2 className="text-sm hover:text-red-400" /> Delete
              </p>
            </div>
          </div>
          <hr className="my-1" />
          <div className="grid grid-cols-5  gap-2">
            <div>
              <h5 className="text-sm font-light">Address </h5>
              <p className=" text-sm font-semibold">
                {booking?.house?.address}
              </p>
            </div>
            <div>
              <h5 className="text-sm font-light">City </h5>
              <p className=" text-sm font-semibold">{booking?.house?.city}</p>
            </div>

            <div>
              <h5 className="text-sm font-light">Rented by </h5>
              <p className="font-semibold text-sm">{booking?.email}</p>
              <p className="font-semibold text-sm">{booking?.phoneNumber}</p>
            </div>
            <div>
              <h5 className="text-sm font-light">House Owner </h5>
              <p className="font-semibold text-sm">{booking?.house?.owner.email}</p>
  
            </div>
            <div>
              <h5 className="text-sm font-light">Rent per month </h5>
              <p className="  font-semibold">{booking?.house?.rentPerMonth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
