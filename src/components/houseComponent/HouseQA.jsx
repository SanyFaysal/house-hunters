import { MdOutlineQuestionAnswer } from "react-icons/md";
import { PiArrowBendDownRightFill } from "react-icons/pi";

export default function HouseQA() {
  return (
    <div>
      <h3 className="text-xl  my-2">Qusestions</h3>
      <div className="mb-4">
        <input
          type="text"
          className="focus:outline-blue-500  rounded py-1 px-3 w-1/2"
        />
        <button className="mx-2  bg-gray-500 rounded  text-white px-3 py-1 r">
          {" "}
          Post
        </button>
      </div>

      <div>
        <div className=" rounded-full  inline ">
          <div className="flex gap-2 items-center">
            <MdOutlineQuestionAnswer /> <span>Do you have any discount ? </span>
          </div>
          <div className="ml-5 mt-2 flex items-center gap-2">
            <PiArrowBendDownRightFill /> yes, you will get 98% percent bonus for
            this.
          </div>
          <div className="mb-4 ml-5">
            <p className="underline">Make Answer</p>
            {/* <div>
              <input
                type="text"
                className="focus:outline-blue-500  rounded py-1 px-3 w-1/3"
              />
              <button className="mx-2  bg-gray-500 rounded  text-white px-3 py-1 r">
                {" "}
                Post
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
