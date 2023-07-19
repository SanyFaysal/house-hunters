import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useEditHouseMutation,
  useGetSingleHousesQuery,
} from '../../redux/house/houseApi';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const EditHouse = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const { data: houseData } = useGetSingleHousesQuery(id);
  const house = houseData?.data;

  const initialPhoneNumber = '+8801';
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const handlePhoneNumber = (e) => {
    const newValue = e.target.value;

    if (
      newValue === initialPhoneNumber ||
      newValue.startsWith('+8801') ||
      newValue === house?.phoneNumber
    ) {
      setPhoneNumber(newValue);
    }
  };

  const [editHouse, { isSuccess, isLoading, isError, error, data }] =
    useEditHouseMutation();
  const handleUpdateHouse = (e) => {
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
      id,
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

    editHouse(houseData);
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
    if (!user?.email) {
      navigate('/login');
    }
  }, [isSuccess, isError, isLoading, error, data, user, navigate]);

  return (
    <div className="bg-white p-5  rounded-lg my-2">
      <h1 className="text-xl font-semibold">Add a New House </h1>
      <form
        onSubmit={handleUpdateHouse}
        className=" grid grid-cols-2 gap-5 mt-5"
      >
        <div>
          <label htmlFor="">House Name</label>
          <br />
          <input
            type="text"
            defaultValue={house?.name}
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
            value={house?.phoneNumber}
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
            name="picture"
            required
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            type="text"
            name="address"
            required
            defaultValue={house?.address}
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
            defaultValue={house?.city}
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
            defaultValue={house?.bedrooms}
            type="number"
            placeholder="Enter bedrooms number "
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Room Size </label>
          <br />
          <input
            name="roomSize"
            required
            type="text"
            defaultValue={house?.roomSize}
            placeholder="Enter room size"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="">Bathrooms </label>
          <br />
          <input
            required
            name="Bathroom"
            type="number"
            defaultValue={house?.bathrooms}
            placeholder="Enter bathrooms number"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Availability Date </label>
          <br />
          <input
            required
            defaultValue={house?.availabilityDate}
            name="availabilityDate"
            type="text"
            placeholder="Availability Date"
            className="border px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="">Rent per month </label>
          <br />
          <input
            name="rentPerMonth"
            required
            type="number"
            defaultValue={house?.rentPerMonth}
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
              defaultValue={house?.description}
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

export default EditHouse;
