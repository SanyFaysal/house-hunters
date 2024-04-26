/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useAddBookingMutation } from "../../redux/booking/bookingApi";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import { useGetSingleHousesQuery } from "../../redux/house/houseApi";

const HouseBooking = () => {
  const params = useParams();

  const { data: houseInfo } = useGetSingleHousesQuery(params?.id);
  const [phoneNumber, setPhoneNumber] = useState();

  const { user } = useSelector((state) => state.auth);

  const [addBookings, { data, isLoading, isSuccess, isError, error }] =
    useAddBookingMutation();
  const token = localStorage.getItem("accessToken");
  const handleBooking = (e) => {
    e.preventDefault();
    const fullName = user?.fullName;
    const email = user?.email;
    const bookingData = {
      fullName,
      email,
      phoneNumber,
      house: params.id,
      token,
    };

    addBookings(bookingData);
  };
  console.log({ data, isLoading, isSuccess, isError, error });
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading..", { id: "addHouse" });
    }
    if (isSuccess) {
      toast.success(data.message, { id: "addHouse" });
    }
    if (isError) {
      console.log(error);
      toast.error(error?.data?.error, { id: "addHouse" });
    }
  }, [isSuccess, isError, isLoading, error, data]);

  return (
    <>
      <Navbar />

      <div className="w-full bg-white flex justify-center pt-20">
        <div className="w-1/2 bg-white">
          <h3 className="font-bold text-lg">
            Book The House <br />
          </h3>
         
            <div className=" flex justify-between gap-5 my-2">
              <div>
                <h5 className="text-sm font-light">House Name </h5>
                <p className="text-sm font-semibold">{houseInfo?.data?.name}</p>
              </div>
              <div>
                <h5 className="text-sm font-light">Address </h5>
                <p className=" text-sm font-semibold">
                  {houseInfo?.data?.address}
                </p>
              </div>
              <div>
                <h5 className="text-sm font-light">City </h5>
                <p className=" text-sm font-semibold">
                  {houseInfo?.data?.city}
                </p>
              </div>

              <div>
                <h5 className="text-sm font-light">Rent per month </h5>
                <p className="  font-semibold ">
                  {houseInfo?.data?.rentPerMonth}
                </p>
              </div>
            </div>
     
          <form onSubmit={handleBooking}>
            <div className="grid-cols-1  my-5 text-lg">
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
              <div>
                <input
                  type="submit"
                  value={"Add Booking"}
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

export default HouseBooking;
