/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Slider } from '@mui/material';
import { useState } from 'react';

const SearchSideBar = ({ filter, setFilter }) => {
  // eslint-disable-next-line no-unused-vars
  const [priceOpen, setPriceOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([1000, 100000]);

  const handlePriceChange = (event, newValue) => {
    setFilter({ ...filter, rentPerMont: newValue });
    setPriceRange(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <div className="px-4  bg-white py-5 px-2 rounded sticky top-16 ">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold mb-1 ">Search House </h1>
        <button
          onClick={() =>
            setFilter({
              city: '',
              bedrooms: null,
              bathrooms: null,
              roomSize: '',
              availability: '',
              rentPerMonth: [],
            })
          }
          className="btn btn-xs bg-red-100 text-red-500"
        >
          clear All
        </button>
      </div>

      <label htmlFor="">City</label>
      <input
        type="text"
        value={filter.city}
        onChange={(e) => setFilter({ ...filter, city: e.target.value })}
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Search by city name"
      />
      <label htmlFor="">Bedrooms</label>
      <input
        type="number"
        value={filter.bedrooms}
        onChange={(e) =>
          setFilter({ ...filter, bedrooms: Number(e.target.value) })
        }
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
      <label htmlFor="">Bath rooms</label>
      <input
        value={filter.bathrooms}
        type="text"
        onChange={(e) =>
          setFilter({ ...filter, bathrooms: Number(e.target.value) })
        }
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
      <label htmlFor="">Room size</label>
      <input
        type="text"
        value={filter.roomSize}
        onChange={(e) => setFilter({ ...filter, roomSize: e.target.value })}
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Search by"
      />
      <label htmlFor="">Availability Date</label>
      <input
        value={filter.availabilityDate}
        type="date"
        onChange={(e) =>
          setFilter({ ...filter, availabilityDate: e.target.value })
        }
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
      <label htmlFor="">Rent Per Month</label>

      <Slider
        size="small"
        value={priceRange ? priceRange : [1000, 100000]}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={1000}
        max={100000}
        color="primary"
      />
    </div>
  );
};

export default SearchSideBar;
