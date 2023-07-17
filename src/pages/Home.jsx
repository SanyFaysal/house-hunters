import Banner from '../components/homeComponent/Banner';

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="grid grid-cols-7 ">
        <div className="px-4 col-span-2">
          <input type="text" className="px-2 py-1 my-2 block w-full" />
          <input type="text" className="px-2 py-1 my-2 block w-full" />
          <input type="text" className="px-2 py-1 my-2 block w-full" />
          <input type="text" className="px-2 py-1 my-2 block w-full" />
          <input type="text" className="px-2 py-1 my-2 block w-full" />
        </div>
        <div className="col-span-5">
          <div className=" grid grid-cols-4 gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
