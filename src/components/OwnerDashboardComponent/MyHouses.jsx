import { RxCross1 } from 'react-icons/rx';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import houseImg from '../../assets/house.jpg';

const MyHouses = () => {
  return (
    <div className="overflow-x-auto bg-white  my-2 rounded-lg">
      <div className="flex justify-between p-5">
        <div>
          <label htmlFor="">Total :120 </label>
        </div>
        <div>
          <label htmlFor="">Per page : </label>
          <select name="" id="" className="border rounded-lg px-2 ml-2">
            <option value="">5 </option>
            <option value="">10 </option>
            <option value="">15 </option>
          </select>
        </div>
      </div>
      <hr />
      <table className="table p-5">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Room size</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
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
                <FiEye className="text-xl hover:text-blue-500" />
                <FiTrash2 className="text-xl hover:text-red-400" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyHouses;
