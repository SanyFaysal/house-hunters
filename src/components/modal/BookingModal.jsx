/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useAddBookingMutation } from '../../redux/booking/bookingApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ houseInfo }) => {
  const [phoneNumber, setPhoneNumber] = useState();

  const { user } = useSelector((state) => state.auth);

  const [addBookings, { data, isLoading, isSuccess, isError, error }] =
    useAddBookingMutation();
  const token = localStorage.getItem('accessToken');
  const handleBooking = (e) => {
    e.preventDefault();
    const fullName = user?.fullName;
    const email = user?.email;
    const bookingData = {
      fullName,
      email,
      phoneNumber,
      house: houseInfo?._id,
      token,
    };
    console.log(bookingData);
    addBookings(bookingData);
  };
  console.log({ data, isLoading, isSuccess, isError, error });
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'addHouse' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'addHouse' });
    }
    if (isError) {
      console.log(error);
      toast.error(error?.data?.error, { id: 'addHouse' });
    }
  }, [isSuccess, isError, isLoading, error, data]);

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">
            Book The House <br />
            <span className="text-orange-500 font-semibold">
              {houseInfo?.name}
            </span>
          </h3>
          <form onSubmit={handleBooking}>
            <div className="my-5 grid-cols-1  my-5 ">
              <div>
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  readOnly
                  value={user?.fullName}
                  className="px-3 py-2 bg-slate-100 rounded w-full"
                />
              </div>
              <div className="my-2">
                <label htmlFor="">Email</label>
                <br />
                <input
                  readOnly
                  type="text"
                  value={user?.email}
                  className="px-3 py-2 bg-slate-100 rounded w-full"
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <br />
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-3 py-2 bg-slate-100 rounded w-full"
                />
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                className="py-2 px-3 bg-red-100 text-red-500 my-auto rounded-lg"
              >
                Close
              </label>
              <div>
                <input
                  type="submit"
                  value={'Add Booking'}
                  onClick={handleBooking}
                  className="py-2 text-center px-3 bg-blue-100 text-blue-500 my-auto rounded-lg"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
