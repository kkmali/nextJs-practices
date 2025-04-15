import React from "react";
import {FaRegUser} from "react-icons/fa";
import {MdOutlinePayment} from "react-icons/md";
import {
  Medical,
  Money,
  Store,
  Calendar,
  Shipping,
  Receipt,
} from "../generic/icon";
import {Order, Payments, Documents} from "./icon";

const constants = () => {
  const HeaderdropDownMenuItems = [
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
  const ActiondropDownMenuItems = [
    {
      label: "Track order",
      icon: <Shipping className="size-7" />,
      className: "flex-row-reverse hover:bg-light-gray p-3",
      variant: "tertiary",
      size: "sm",
      role: "link",
      href: "/",
    },
    {
      label: "View Receipt",
      icon: <Receipt />,
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
      href: "/coaching",
    },
    {
      title: "Cashback",
      icon: Money,
      href: "/cashback",
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
      icon: <Order className="md:size-8 size-5" />,
    },
    {
      title: "Documents",
      icon: <Documents className="md:size-8 size-5" />,
    },
    {
      title: "Billing & Payments",
      icon: <Payments className="md:size-8 size-5" />,
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
      action: "schedule",
    },
    {
      date: "12/12/2024",
      type: "Medical Appointment",
      details: "0.25 mg",
      status: "Canceled",
      action: "",
    },
    {
      date: "12/12/2024",
      type: "Fitness Starter Plan",
      details: "Phone call",
      status: "Completed",
      action: "",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "Phone call",
      status: "Shipped",
      action: "",
    },
    {
      date: "12/12/2024",
      type: "Semaglutide",
      details: "Phone call",
      status: "Rescheduled",
      action: "",
    },
  ];

  return {
    HeaderdropDownMenuItems,
    dashboardCardData,
    Tabtitle,
    OrdersTabTitle,
    tableHead,
    tableData,
    ActiondropDownMenuItems,
  };
};

export default constants;
