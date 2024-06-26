/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMakeAnswerMutation } from "../../redux/house/houseApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function MakeAnswer({ houseId, question }) {
  const { user } = useSelector((state) => state.auth);
  const [ans, setAns] = useState("");
  const [openAnswerInput, setOpenAnswerInput] = useState(false);

  const [makeAnswer] = useMakeAnswerMutation();
  const handleMakeAnswer = (e) => {
    e.preventDefault();
    if (user?.email) {
      makeAnswer({ houseId, questionId: question?._id, ans });
      setAns("");
    } else {
      toast.error("Please login first!");
    }
  };
  return (
    <div className="mb-4 ml-5">
      <p
        onClick={() => setOpenAnswerInput(!openAnswerInput)}
        className="underline"
      >
        Make Answer
      </p>
      {openAnswerInput && (
        <form onSubmit={handleMakeAnswer} className="mt-2">
          <input
            type="text"
            onChange={(e) => setAns(e.target.value)}
            value={ans}
            className="focus:outline-blue-500  rounded py-1 px-3 w-1/3"
          />
          <button
            type="submit"
            className="mx-2  bg-gray-500 rounded  text-white px-3 py-1 r"
          >
            {" "}
            Post
          </button>
        </form>
      )}
    </div>
  );
}
