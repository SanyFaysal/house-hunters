import { useState } from 'react';
import { useGetHousesQuery } from '../../redux/house/houseApi';
import PaginationPart from '../shared/PaginationPart';

import HouseCard from '../houseComponent/HouseCard';
import SearchSideBar from './SearchSideBar';
console.log(SearchSideBar)
const HouseSearch = () => {
  const [filter, setFilter] = useState({
    city: '',
    bedrooms: null,
    bathrooms: null,
    roomSize: '',
    availability: '',
    rentPerMonth: [],
  });

  const [sort, setSort] = useState({
    perPage: 10,
    pageNumber: 1,
  });

  const { data } = useGetHousesQuery({ filter, sort });


  return (
    <div className="">
      <div className="grid grid-cols-7 mx-16  gap-4 mt-4">
        <div className="col-span-2 ">
          {/* <SearchSideBar filter={filter} setFilter={setFilter} /> */}
        </div>
        <div className="col-span-7">
          <div className=" grid grid-cols-4 gap-5">
            {data?.data?.map((house) => (
              <HouseCard key={house?._id} house={house} />
            ))}

         
          </div>
          <div className="my-12 mx-auto w-full flex justify-center">
              <PaginationPart
                sort={sort}
                setSort={setSort}
                pageFound={data?.pageFound}
                data={data?.data}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HouseSearch;
