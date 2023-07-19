// import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useAddHouseMutation } from '../../redux/house/houseApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';

const AddNewHouse = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const initialPhoneNumber = '+8801';
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [addNewHouse, { data, isSuccess, isLoading, isError, error }] =
    useAddHouseMutation();
  const handlePhoneNumber = (e) => {
    const newValue = e.target.value;

    if (newValue === initialPhoneNumber || newValue.startsWith('+8801')) {
      setPhoneNumber(newValue);
    }
  };
  const handleAddHouse = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const bedrooms = e.target.bedrooms.value;
    const bathrooms = e.target.bathrooms.value;
    const roomSize = e.target.roomSize.value;
    const picture = e.target.picture.value;
    const availabilityDate = e.target.availabilityDate.value;
    const rentPerMonth = e.target.rentPerMonth.value;
    const phoneNumber = e.target.phoneNumber.value;
    const description = e.target.description.value;

    const houseData = {
      name,
      address,
      city,
      bedrooms,
      bathrooms,
      roomSize,
      picture,
      availabilityDate,
      rentPerMonth,
      phoneNumber,
      description,
    };
    addNewHouse(houseData);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'addHouse' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'addHouse' });
    }
    if (isError) {
      toast.error(error.message, { id: 'addHouse' });
    }

    if (!user?.email) {
      navigate('/login');
    }
  }, [isSuccess, isError, isLoading, error, data, user, navigate]);
  return (
    <div className="bg-white p-5  rounded-lg my-2">
      <h1 className="text-xl font-semibold">Add a New House </h1>
      <form onSubmit={handleAddHouse} className=" grid grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="">House Name</label>
          <br />
          <input
            type="text"
            required
            name="name"
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
            name="phoneNumber"
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
            name="picture"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            type="text"
            required
            name="address"
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
            name="city"
            placeholder="Enter city name"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Bedrooms</label>
          <br />
          <input
            required
            name="bedrooms"
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
            name="roomSize"
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
            name="bathrooms"
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
            name="availabilityDate"
            placeholder="Availability Date"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Rent per month </label>
          <br />
          <input
            required
            name="rentPerMonth"
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
              name="description"
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
      </form>
    </div>
  );
};

export default AddNewHouse;
