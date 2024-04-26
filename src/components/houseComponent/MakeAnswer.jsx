/* eslint-disable react/prop-types */
import { useState } from "react";


export default function MakeAnswer({question}) {
    const [openAnswerInput, setOpenAnswerInput] = useState(false);

  return (
    <div className="mb-4 ml-5">
    <p
      onClick={() => setOpenAnswerInput(!openAnswerInput)}
      className="underline"
    >
      Make Answer
    </p>
    {openAnswerInput && (
      <div className="mt-2">
        <input
          type="text"
          className="focus:outline-blue-500  rounded py-1 px-3 w-1/3"
        />
        <button className="mx-2  bg-gray-500 rounded  text-white px-3 py-1 r">
          {" "}
          Post
        </button>
      </div>
    )}
  </div>
  )
}
