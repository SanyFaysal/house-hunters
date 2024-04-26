import { useSelector } from "react-redux";
import HouseCard from "../components/houseComponent/HouseCard";
import Navbar from "../layouts/Navbar";

export default function Wishlist() {
  const { houses } = useSelector((state) => state.wishlist);
  return (
    <div className=" min-h-screen">
      <div className="h-20">
      <Navbar/>
      </div>
        <div>
            <h1 className="text-5xl mx-auto text-center ">Wishlist </h1>
        </div>
      <div className="grid grid-cols-4 pt-10 mx-16 gap-5">
        {houses.map((house) => (
          <HouseCard key={house?._id} house={house} />
        ))}
      </div>
    </div>
  );
}
