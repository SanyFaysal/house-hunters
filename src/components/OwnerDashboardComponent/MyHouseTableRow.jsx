/* eslint-disable react/prop-types */
import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi';

import houseImg from '../../assets/house.jpg';
import { useNavigate } from 'react-router-dom';
import { useDeleteHouseMutation } from '../../redux/house/houseApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const MyHouseTableRow = ({ house }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [deleteHouse, { data, isLoading, isSuccess, isError, error }] =
    useDeleteHouseMutation();

  const handleDeleteHouse = (id) => {
    deleteHouse(id);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading..', { id: 'delete' });
    }
    if (isSuccess) {
      toast.success(data.message, { id: 'delete' });
    }
    if (isError) {
      toast.error(error?.data?.error, { id: 'delete' });
    }
    if (!user?.email) {
      navigate('/login');
    }
  }, [isSuccess, isError, isLoading, error, data, user, navigate]);
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
            <div className="font-bold">{house?.name}</div>
            <div className="text-sm opacity-50">{house?.city}</div>
            <div className="text-sm opacity-50">{house?.address}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="">{house?.phoneNumber}</span>
      </td>
      <td>{house?.bedrooms}</td>
      <td>{house?.bathrooms}</td>
      <td>
        {house?.roomSize}
        {/* 13ft <RxCross1 className="inline" /> 12ft */}
      </td>
      <td>{house?.rentPerMonth}</td>
      <td>
        <div className="flex gap-4  items-center">
          <FiEdit2
            onClick={() => navigate(`/dashboard/editHouse/${house?._id}`)}
            className="text-lg hover:text-blue-500"
          />
          <FiEye
            onClick={() => navigate(`/house/${house?._id}`)}
            className="text-lg hover:text-blue-500"
          />
          <FiTrash2
            onClick={() => handleDeleteHouse(house?._id)}
            className="text-lg hover:text-red-400"
          />
        </div>
      </td>
    </tr>
  );
};

export default MyHouseTableRow;
