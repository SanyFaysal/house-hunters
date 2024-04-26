/* eslint-disable react/prop-types */

import { MdOutlineQuestionAnswer } from "react-icons/md";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import { useAddQuestionMutation } from "../../redux/house/houseApi";
import MakeAnswer from "./MakeAnswer";
import { formateDate } from "../../utils/formatedDate";
import { useState } from "react";

export default function HouseQA({ house }) {
  const [addQuestion] = useAddQuestionMutation();
  const [qus, setQus] = useState("");
  const handleAddQuestion = (event) => {
    event.preventDefault();

    console.log("id", qus);
    addQuestion({ id: house._id, qus });

    setQus("");
  };
  return (
    <div>
      <h3 className="text-xl  my-2">Qusestions</h3>
      <form onSubmit={handleAddQuestion} className="mb-4">
        <input
          onChange={(e) => setQus(e.target.value)}
          type="text"
          value={qus}
          className="focus:outline-blue-500  rounded py-1 px-3 w-1/2"
        />
        <button
          type="submit"
          className="mx-2  bg-gray-500 rounded  text-white px-3 py-1 r"
        >
          {" "}
          Post
        </button>
      </form>

      <div>
        <div className=" rounded-full  inline ">
          {house?.questions?.map((question) => (
            <>
              {" "}
              <div className="">
                <p className="text-xl">
                  <MdOutlineQuestionAnswer className="inline" />{" "}
                  <span>{question?.qus} </span>
                </p>
                <p>at {formateDate(question?.created_at)}</p>
              </div>
              <div className="ml-5 mt-2  mb-2">
                {" "}
                {question?.answers?.map((answer) => (
                  <>
                    <p>
                      {" "}
                      <PiArrowBendDownRightFill className="inline" />{" "}
                      {answer?.ans}
                    </p>
                    <p className="text-sm">
                      at {formateDate(question?.created_at)}
                    </p>
                  </>
                ))}
              </div>
              <MakeAnswer question={question} houseId={house?._id} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
