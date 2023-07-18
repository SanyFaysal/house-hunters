import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minus
          laudantium. Assumenda laborum, voluptate aliquid sequi tempora unde,
          dolorum, aspernatur error dignissimos temporibus tempore laboriosam ab
          aliquam eum inventore illo. Laborum iste autem soluta fugit iure
          adipisci odit, repudiandae quasi?
        </p>
      </div>
      <div className="col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
