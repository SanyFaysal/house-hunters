import { useState } from 'react';
import { useGetHousesQuery } from '../../redux/house/houseApi';
import PaginationPart from '../shared/PaginationPart';

import HouseCard from './HouseCard';
import SearchSideBar from './SearchSideBar';

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
  console.log(filter);
  const { data } = useGetHousesQuery({ filter, sort });

  console.log(data);
  return (
    <div className="">
      <div className="grid grid-cols-7 mx-16  gap-4 mt-4">
        <div className="col-span-2 ">
          <SearchSideBar filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-span-5">
          <div className=" grid grid-cols-1 gap-2">
            {data?.data?.map((house) => (
              <HouseCard key={house?._id} house={house} />
            ))}

            <div className="my-6 mx-auto">
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
    </div>
  );
};

export default HouseSearch;
