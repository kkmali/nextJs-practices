import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { Medical, Money, Store, Calendar } from "../generic/icon";

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
  const dashboardCardData = [
    {
      title: "Treatments",
      icon: Medical,
      href: "/",
    },
    {
      title: "Coaching",
      icon: Calendar,
      href: "/calendar",
    },
    {
      title: "Cashback",
      icon: Money,
      href: "/money",
    },
    {
      title: "Store",
      icon: Store,
      href: "/store",
    },
  ];
  return {
    dropDownMenuItems,
    dashboardCardData,
  };
};

export default constants;
