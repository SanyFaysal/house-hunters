import house from '../../assets/house.jpg';
import { RxCross1 } from 'react-icons/rx';
import BookingModal from '../modal/BookingModal';
import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi';

const BookingCard = () => {
  return (
    <div className="my-2 rounded ">
      <div className="grid grid-cols-9 gap-x-4 bg-gray-100 rounded-lg p-4 ">
        <div className="col-span-1">
          <img className="h-20 w-full rounded-lg shadow" src={house} alt="" />
        </div>
        <div className="col-span-8">
          <div className="flex justify-between  gap-2">
            <div>
              <p className=" text-sm font-semibold">Amader Sopno Vila</p>
            </div>
            <div className="flex gap-2">
              {/* <p className=" btn btn-sm bg-white">
                <FiEdit2 className="text-xs inline hover:text-blue-500" /> Edit
              </p> */}
              <p className=" btn btn-sm bg-white ">
                <FiEye className="text-sm hover:text-blue-500" />
                Details
              </p>
              <p className=" btn btn-sm bg-white normal-case">
                <FiTrash2 className="text-sm hover:text-red-400" /> Delete
              </p>
            </div>
          </div>
          <hr className="my-1" />
          <div className="grid grid-cols-5  gap-2">
            <div>
              <h5 className="text-sm font-light">Address </h5>
              <p className=" text-sm font-semibold">
                Gazipur, Dhaka, sreepur, Proholadpur, Kadma ,
              </p>
            </div>
            <div>
              <h5 className="text-sm font-light">City </h5>
              <p className=" text-sm font-semibold">Gazipur</p>
            </div>

            <div>
              <h5 className="text-sm font-light">Rented by </h5>
              <p className="font-semibold text-sm">Abu Sani Faysal</p>
              <p className="font-semibold text-sm">+8801634319696</p>
            </div>
            <div>
              <h5 className="text-sm font-light">House Owner </h5>
              <p className="font-semibold text-sm">Kalam Sheikh</p>
              <p className="font-semibold text-sm">+881785452254</p>
            </div>
            <div>
              <h5 className="text-sm font-light">Rent per month </h5>
              <p className="  font-semibold text-orange-400">12000 TK</p>
            </div>
          </div>
          {/* <hr className="my-2" />
          <div className="grid grid-cols-4  gap-2">
            <div>
              <h5 className="text-sm font-light">Bedrooms </h5>
              <p className=" text-sm font-semibold">4</p>
            </div>

            <div>
              <h5 className="text-sm font-light">Room Size </h5>
              <p className=" text-sm font-semibold">
                13ft <RxCross1 className="inline" /> 12ft
              </p>
            </div>
            <div>
              <h5 className="text-sm font-light">Availability Date </h5>
              <p className=" text-sm font-semibold">26 July, 2023</p>
            </div>
            <div className=" flex gap-2">
              <button className=" text-sm bg-gray-100 text-gray-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold px-3 py-1 rounded">
                Details
              </button>

              <label
                htmlFor="my_modal_6"
                className=" text-sm py-3 bg-slate-100 text-slate-600 my-auto hover:text-slate-100 duration-500 hover:bg-slate-600 font-semibold px-3 py-1 rounded"
              >
                Book House
              </label>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
