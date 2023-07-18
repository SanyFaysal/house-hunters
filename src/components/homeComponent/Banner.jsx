const Banner = () => {
  const elem = [];
  for (let index = 0; index < 245; index++) {
    elem.push(index);
  }
  return (
    <div className="text-center my-12   mx-12 mt-[-10px]">
      <h3 className="text-3xl  my-5 ">Welcome To</h3>
      <h1 className="text-5xl  font-bold opacity-75 mt-[-20px] ">
        House Hunters
      </h1>
      <p className="text-2xl mt-2">Total Houses: 125</p>
    </div>
  );
};

export default Banner;
