import { useLocation } from "react-router-dom";

const WhatAsked = () => {
  const location = useLocation();
  const { input } = location.state || {};
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">You asked:</h1>
      <div className="m-2">
        <p className="text-xl font-semibold text-black ">
          {input ? `${input}` : "No input provided"}
        </p>
        <p>
          Searched for recent breach of contract case laws, including
          precedents, predictive outcomes, and relevant sections of the Indian
          Contract Act and Specific Relief Act. Provided data includes cases
          with similar context, expected compensation, and legal framework.
        </p>
      </div>
    </div>
  );
};

export default WhatAsked;
