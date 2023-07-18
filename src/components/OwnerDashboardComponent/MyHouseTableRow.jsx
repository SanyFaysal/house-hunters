import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import houseImg from '../../assets/house.jpg';
import { useNavigate } from 'react-router-dom';
const MyHouseTableRow = () => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={houseImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">+8801634319696</div>
          </div>
        </div>
      </td>
      <td>
        <span className="">Gazipur</span>
      </td>
      <td>4</td>
      <td>2</td>
      <td>
        13ft <RxCross1 className="inline" /> 12ft
      </td>
      <td>12000 Tk</td>
      <td>
        <div className="flex gap-4  items-center">
          <FiEdit2 className="text-xl hover:text-blue-500" />
          <FiEye
            onClick={() => navigate('/house/jfjdk')}
            className="text-xl hover:text-blue-500"
          />
          <FiTrash2 className="text-xl hover:text-red-400" />
        </div>
      </td>
    </tr>
  );
};

export default MyHouseTableRow;
