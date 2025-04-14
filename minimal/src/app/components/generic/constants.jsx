import React from "react";
import {FaRegUser} from "react-icons/fa";
import {MdOutlinePayment} from "react-icons/md";
import {Medical, Money, Store, Calendar} from "../generic/icon";
import {Order, Payments, Documents} from "./icon";

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
  const Tabtitle = [
    {
      title: "Orders",
      icon: <Order />,
    },
    {
      title: "Documents",
      icon: <Documents />,
    },
    {
      title: "Billing & Payments",
      icon: <Payments />,
    },
  ];
  const OrdersTabTitle = [
    {
      title: "Upcoming (6)",
    },
    {
      title: "past (0)",
    },
  ];
  const tableHead = [
    {label: "Date"},
    {label: "Type"},
    {label: "Details"},
    {label: "Status"},
    {label: "Actions"},
  ];
  const tableData = [
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Pending",
      action: "payment",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Scheduled",
      action: "payment",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Canceled",
      action: "payment",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Completed",
      action: "payment",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Shipped",
      action: "payment",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "0.25 mg",
      status: "Rescheduled",
      action: "payment",
    },
  ];

  return {
    dropDownMenuItems,
    dashboardCardData,
    Tabtitle,
    OrdersTabTitle,
    tableHead,
    tableData,
  };
};

export default constants;
