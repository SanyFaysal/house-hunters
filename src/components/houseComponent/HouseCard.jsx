/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


import { Link } from "react-router-dom";
// import { toast } from 'react-hot-toast';

import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlist/wishListSlice";

const HouseCard = ({ house }) => {
  const dispatch = useDispatch();
  const {
    auth: { user },
    wishlist: { houses },
  } = useSelector((state) => state);

  // const handleOpenModal = () => {
  //   if (!user?.email) {
  //     return toast.error('Please Login first', { id: 'booking' });
  //   }
  //   if (user?.email && user?.role === 'houseRenter') {
  //     return window.my_modal_6.showModal();
  //   } else if (user?.email && user?.role === 'houseOwner') {
  //     toast.error("As a House Owner , you can't book any house !!!", {
  //       id: 'booking',
  //     });
  //   }
  // };

  const handleAddToWishtlist = (house) => {
    dispatch(addToWishlist(house));
  };
  const handleRemoveFromWishtlist = (house) => {
    dispatch(removeFromWishlist(house));
  };

  const alreadyAddedToWishlist = houses.find(
    (wishedHouse) => wishedHouse._id === house._id
  );
  return (
    <div className="bg-white  rounded-lg ">
      <div className="  rounded-lg ">
        <div className="">
          <img
            className="w-fill rounded-t-lg"
            src={
              "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
            }
            alt=""
          />
        </div>
        <div className="col-span- p-4">
          <div className=" grid-cols-4  gap-2">
            {/* <div>
              <h5 className="text-sm font-light">Name </h5>
              <p className="text-sm font-semibold">{house?.name}</p>
            </div> */}
            <div>
              <h5 className="text-sm font-light">Address </h5>
              <p className=" text-sm font-semibold">{house?.address}</p>
            </div>
            {/* <div>
              <h5 className="text-sm font-light">City </h5>
              <p className=" text-sm font-semibold">{house?.city}</p>
            </div> */}

            <div>
              <h5 className="text-sm font-light">Rent per month </h5>
              <p className="  font-semibold ">{house?.rentPerMonth}</p>
            </div>
          </div>

        </div>
        <div className=" flex gap-3 justify-between px-4  pb-4">
       
          {user?.role === "houseRenter" && (
            <Link 
            
            to={`/house-booking/${house?._id}`}
              className=" text-sm py-2 bg-slate-100 text-slate-600 my-auto hover:text-slate-100 duration-500 hover:bg-slate-600 font-semibold px-3 rounded"
            >
              Book House
            </Link>
          )}
          <Link
            to={`/house/${house?._id}`}
            className=" my-auto text-sm py-2 bg-gray-100 text-gray-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold px-3  rounded"
          >
            Details
          </Link>
          {!alreadyAddedToWishlist ? (
            <button
              onClick={() => handleAddToWishtlist(house)}
              className={`my-auto py-2 px-2 text-xl bg-gray-100 text-gray-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold  rounded
          
            `}
            >
              <CiHeart />
            </button>
          ) : (
            <button
              onClick={() => handleRemoveFromWishtlist(house)}
              className={`my-auto  py-2 text-xl bg-red-100 text-red-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold px-3 py-1 rounded
        
          `}
            >
              <FaHeart />
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default HouseCard;
