import house from '../../assets/house.jpg';
import { RxCross1 } from 'react-icons/rx';

const HouseCard = () => {
  return (
    <div className="bg-white p-4 rounded">
      <div className="grid grid-cols-9 gap-x-4 ">
        <div className="col-span-1">
          <img className="h-28 rounded shadow" src={house} alt="" />
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-4  gap-2">
            <div>
              <h5 className="text-sm font-light">Name </h5>
              <p className="text-sm font-semibold">
                Amader sopno Vila Lorem ipsum dolor sit amet.
              </p>
            </div>
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
              <h5 className="text-sm font-light">Rent per month </h5>
              <p className=" text-lg font-semibold text-orange-400">12000 TK</p>
            </div>
          </div>
          <hr className="my-2" />
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
            <div className="flex justify-end">
              <button className="bg-gray-100 text-gray-500 hover:text-gray-100 duration-500 hover:bg-gray-800 font-semibold px-3 py-1 rounded">
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
