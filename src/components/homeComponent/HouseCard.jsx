/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import houseimg from '../../assets/house.jpg';

import BookingModal from '../modal/BookingModal';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const HouseCard = ({ house }) => {
  const { user } = useSelector((state) => state.auth);
  const [houseInfo, setHouseInfo] = useState({});
  const handleOpenModal = () => {
    if (!user?.email) {
      return toast.error('Please Login first', { id: 'booking' });
    }
    if (user?.email && user?.role === 'houseRenter') {
      return window.my_modal_6.showModal();
    } else if (user?.email && user?.role === 'houseOwner') {
      toast.error("As a House Owner , you can't book any house !!!", {
        id: 'booking',
      });
    }
  };
  return (
    <div className="bg-white p-4 rounded">
      <div className="grid grid-cols-9 gap-x-4 ">
        <div className="col-span-1">
          <img className="h-28 rounded-lg shadow" src={houseimg} alt="" />
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-4  gap-2">
            <div>
              <h5 className="text-sm font-light">Name </h5>
              <p className="text-sm font-semibold">{house?.name}</p>
            </div>
            <div>
              <h5 className="text-sm font-light">Address </h5>
              <p className=" text-sm font-semibold">{house?.address}</p>
            </div>
            <div>
              <h5 className="text-sm font-light">City </h5>
              <p className=" text-sm font-semibold">{house?.city}</p>
            </div>

            <div>
              <h5 className="text-sm font-light">Rent per month </h5>
              <p className="  font-semibold ">{house?.rentPerMonth}</p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-4  gap-2">
            <div>
              <h5 className="text-sm font-light">Bedrooms </h5>
              <p className=" text-sm font-semibold">{house?.bedrooms}</p>
            </div>

            <div>
              <h5 className="text-sm font-light">Room Size </h5>
              <p className=" text-sm font-semibold">
                {house?.roomSize}
                {/* 13ft <RxCross1 className="inline" /> 12ft */}
              </p>
            </div>
            <div>
              <h5 className="text-sm font-light">Availability Date </h5>
              <p className=" text-sm font-semibold">
                {house?.availabilityDate}
              </p>
            </div>
            <div className=" flex gap-2">
              <Link
                to={`/house/${house?._id}`}
                className=" my-auto py-3 px-2 text-sm bg-gray-100 text-gray-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold px-3 py-1 rounded"
              >
                Details
              </Link>

              {!user?.role === 'houseRenter' && (
                <label
                  onClick={handleOpenModal}
                  className=" text-sm py-3 bg-slate-100 text-slate-600 my-auto hover:text-slate-100 duration-500 hover:bg-slate-600 font-semibold px-3 py-1 rounded"
                >
                  Book House
                </label>
              )}
              {user?.role === 'houseRenter' && (
                <label
                  htmlFor="my_modal_6"
                  onClick={() => setHouseInfo(house)}
                  className=" text-sm py-3 bg-slate-100 text-slate-600 my-auto hover:text-slate-100 duration-500 hover:bg-slate-600 font-semibold px-3 py-1 rounded"
                >
                  Book House
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      <BookingModal houseInfo={houseInfo} />
    </div>
  );
};

export default HouseCard;
