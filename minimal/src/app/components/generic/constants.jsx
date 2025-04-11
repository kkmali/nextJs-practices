import React from "react";
import {FaRegUser} from "react-icons/fa";
import {MdOutlinePayment} from "react-icons/md";

const constants = () => {
  const dropDownMenuItems = [
    {
      label: "My information",
      icon: <FaRegUser className="md:text-xl text-base" />,
      className: "flex-row-reverse hover:bg-light-gray p-3",
      variant: "tertiary",
      size: "sm",
      role: "link",
      href: "/",
    },
    {
      label: "Payment Method",
      icon: <MdOutlinePayment className="md:text-xl text-base" />,
      className: "flex-row-reverse hover:bg-light-gray p-3",
      variant: "tertiary",
      size: "sm",
      role: "link",
      href: "/",
    },
  ];
  // const dashbaordCardData = [{}];
  return {
    dropDownMenuItems,
  };
};

export default constants;
