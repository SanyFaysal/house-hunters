import { RxCross1 } from 'react-icons/rx';
import houseBanner from '../assets/house-banner.jpg';
export default function HouseDetails() {
  return (
    <div className="grid grid-cols-4 gap-10 px-16 pb-20 ">
      <div className="col-span-3 flex-col gap-y-10 max-w-7xl mx-auto items-center ">
        <div className=" flex justify-center mb-5">
          <img src={houseBanner} alt="" className="h-60" />
        </div>

        <div className="mb-5">
          <label htmlFor="font-semibold">Rent</label>
          <h1 className="text-2xl font-semibold">1,25,000 Tk</h1>
        </div>

        <div className="mb-5 ">
          <label htmlFor="font-semibold">House Name</label>
          <h1 className="text-xl ">Amader Sopno Vhila</h1>
        </div>
        <div className="mb-5">
          <label htmlFor="font-bold" className="font-semibold">
            House Details
          </label>
          <h1 className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            molestiae qui expedita quo odio asperiores recusandae repellendus,
            laboriosam, error neque, fugiat iure! Delectus eos maxime molestiae
            sit quasi est vitae dolorum nihil esse, alias excepturi quod quia
            dolores quo ducimus consectetur nulla magnam. Numquam nostrum
            consectetur facere nulla, nam ut?
          </h1>
        </div>
        <div className="flex justify-start my-5">
          <button className=" px-4 py-2 text-lg rounded-lg bg-white text-blue-500 ">
            Book house
          </button>
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="bg-white p-5 rounded-lg flex-col flex gap-y-2">
          <h1 className="text-xl mb-[-5px]">House Info</h1>
          <div>
            <label htmlFor="text-light">Bed Rooms</label>
            <p className="text-md font-semibold">4 Rooms </p>
          </div>
          <div>
            <label htmlFor="">Bath Rooms</label>
            <p className="text-md font-semibold">2 </p>
          </div>
          <div>
            <label htmlFor="">Room Size</label>
            <p className="text-md font-semibold">
              {' '}
              13ft <RxCross1 className="inline" /> 12ft{' '}
            </p>
          </div>
          <div>
            <label htmlFor="">Availability Date</label>
            <p className="text-md font-semibold">26 july, 2023 </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg mt-5 flex-col flex gap-y-2">
          <h1 className="text-xl mb-[-5px]">Contact Info</h1>
          <div>
            <label htmlFor="text-light">Address</label>
            <p className="text-sm font-semibold">
              Gazipur, Sreepur, Bangladesh{' '}
            </p>
          </div>
          <div>
            <label htmlFor="">City</label>
            <p className="text-sm font-semibold">Gazipur </p>
          </div>
          <div>
            <label htmlFor="">Owner Name</label>
            <p className="text-sm font-semibold"> Kalam Sheikh</p>
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <p className="text-sm font-semibold">01634319696 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
