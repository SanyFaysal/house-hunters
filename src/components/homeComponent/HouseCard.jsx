/* eslint-disable react/prop-types */
import houseimg from '../../assets/house.jpg';

import BookingModal from '../modal/BookingModal';
import { Link } from 'react-router-dom';

const HouseCard = ({ house }) => {
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

              <label
                htmlFor="my_modal_6"
                className=" text-sm py-3 bg-slate-100 text-slate-600 my-auto hover:text-slate-100 duration-500 hover:bg-slate-600 font-semibold px-3 py-1 rounded"
              >
                Book House
              </label>
            </div>
          </div>
        </div>
      </div>

      <BookingModal />
    </div>
  );
};

export default HouseCard;
