const Banner = () => {
  const elem = [];
  for (let index = 0; index < 245; index++) {
    elem.push(index);
  }
  return (
    <div className="text-center my-12   mx-12 relative ">

      <h1 className="text-[170px] architects-daughter-regular  font-bold opacity-10    ">
        HOUSEHUNTERS
      </h1>
    <div className="absolute top-16 w-full">
    <h1 className="text-[70px]  font-bold architects-daughter-regular   ">
        Find Your Dream House
      </h1>
    </div>

      <p className="text-2xl mt-2">Total Houses: 125</p>
    </div>
  );
};

export default Banner;
