import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingIcon } from "../Home/HomeStyled";

export const Loading = () => {
  return (
    <>
      <LoadingIcon>
        <AiOutlineLoading3Quarters />
      </LoadingIcon>
    </>
  );
};
