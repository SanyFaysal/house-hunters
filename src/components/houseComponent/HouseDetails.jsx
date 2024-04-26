import houseBanner from "../../assets/house-banner.jpg";
import { Link, useParams } from "react-router-dom";
import { useGetSingleHousesQuery } from "../../redux/house/houseApi";
import Navbar from "../../layouts/Navbar";
import HouseDetailsSideInfo from "./HouseDetailsSideInfo";
import HouseQA from "./HouseQA";
export default function HouseDetails() {
  const { id } = useParams();

  const { data } = useGetSingleHousesQuery(id);
  const house = data?.data || {};
  return (
    <>
      <div className="h-28">
        <Navbar />
      </div>
      <div className="grid grid-cols-4 gap-10 px-16 pb-20 ">
        <div className="col-span-3 flex-col gap-y-10 max-w-7xl   ">
          <div className=" flex justify-start mb-5">
            <img src={houseBanner} alt="" className="h-62 w-full" />
          </div>

          <div className="mb-5 flex justify-between">
       <div>
       <label htmlFor="font-semibold">Rent</label>
            <h1 className="text-2xl font-semibold">{house?.rentPerMonth}</h1>

       </div>
           
          </div>

          <div className="mb-5 ">
            <label htmlFor="font-semibold">House Name</label>
            <h1 className="text-xl ">{house?.name}</h1>
          </div>
          <div className="mb-5">
            <label htmlFor="font-bold" className="font-semibold">
              House Details
            </label>
            <h1 className="text-lg ">{house?.description}</h1>
          </div>
          <div className="flex justify-start my-5">
            <Link to={`/house-booking/${house?._id}`} className=" px-4 py-2 text-lg rounded-lg bg-blue-500 text-white h-fit">
              Book house
            </Link>
          </div>
          <HouseQA house={house}/>
        </div>
 
   

<HouseDetailsSideInfo house={house} />



      </div>
    </>
  );
}
