import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex gap-1 text-neutral-400 cursor-pointer relative justify-start text-start items-start"
      onClick={goBack}
    >
      <HiArrowNarrowLeft size={20} />
      <span className="text-base mt-0">Back</span>
    </div>
  );
};

export default BackArrow;
