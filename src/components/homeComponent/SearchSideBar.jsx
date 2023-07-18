const SearchSideBar = () => {
  return (
    <div className="px-4  bg-white py-5 px-2 rounded sticky top-16 ">
      <h1 className="text-xl font-semibold mb-1 ">Search House </h1>

      <label htmlFor="">City</label>
      <input
        type="text"
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Search by city name"
      />
      <label htmlFor="">Bedrooms</label>
      <input
        type="number"
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
      <label htmlFor="">Bath rooms</label>
      <input
        type="text"
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
      <label htmlFor="">Room size</label>
      <input
        type="text"
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Search by"
      />
      <label htmlFor="">Availability Date</label>
      <input
        type="date"
        className="px-3 py-2 my-2 block w-full rounded bg-[whitesmoke]"
        placeholder="Enter city name"
      />
    </div>
  );
};

export default SearchSideBar;
