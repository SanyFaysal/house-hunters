// import { Link } from 'react-router-dom';

import { useState } from 'react';
// import { toast } from 'react-hot-toast';

const BookingHouse = () => {
  const initialPhoneNumber = '+8801';
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const handlePhoneNumber = (e) => {
    const newValue = e.target.value;

    if (newValue === initialPhoneNumber || newValue.startsWith('+8801')) {
      setPhoneNumber(newValue);
    }
  };

  return (
    <div className="bg-white p-5  rounded-lg my-2">
      <h1 className="text-xl font-semibold">Add a New House </h1>
      <div className=" grid grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="">House Name</label>
          <br />
          <input
            type="text"
            required
            placeholder="Enter House Name"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">
            Phone Number
            <sm className="text-xs ml-1">
              (Only Bangladeshi numbers are allowed
            </sm>{' '}
            )
          </label>
          <br />
          <input
            type="text"
            required
            value={phoneNumber}
            onChange={handlePhoneNumber}
            readOnly={!phoneNumber.startsWith('+8801')}
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div className="">
          <label htmlFor="">House Picture</label>
          <br />
          <input
            type="file"
            required
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            type="text"
            required
            placeholder="Enter house address"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">City</label>
          <br />
          <input
            type="text"
            required
            placeholder="Enter city name"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Bedrooms</label>
          <br />
          <input
            required
            type="number"
            placeholder="Enter bedrooms number "
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Room Size </label>
          <br />
          <input
            required
            type="text"
            placeholder="Enter room size"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="">Bathrooms </label>
          <br />
          <input
            required
            type="number"
            placeholder="Enter bathrooms number"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Availability Date </label>
          <br />
          <input
            required
            type="text"
            placeholder="Availability Date"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Rent per month </label>
          <br />
          <input
            required
            type="text"
            placeholder="Rent amount in BDT"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div className="col-span-2 grid grid-cols-4">
          <div className="col-span-3">
            <label htmlFor="">Description </label>
            <br />
            <textarea
              required
              type="text"
              rows={2}
              placeholder="Write description ..."
              className="border px-3 py-2 w-full rounded-lg"
            />
          </div>
          <div className="col-span-1 flex justify-end items-end">
            <input
              type="submit"
              value="Add House "
              className="px-3 py-2 bg-blue-100 text-blue-500  font-semibold rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHouse;
