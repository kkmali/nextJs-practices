import React from "react";
import {Calendar2, CalendarCheck, Cancle, Check, Shipping, Timer} from "./icon";

const StatusPill = ({label}) => {
  // Define the icon map
  const icons = {
    Shipped: <Shipping />,
    Delivered: <Check />,
    Completed: <Check />,
    Scheduled: <CalendarCheck />,
    Rescheduled: <Calendar2 />,
    "In progress": <Calendar2 />,
    Canceled: <Cancle />,
    Pending: <Timer />,
    Processing: <Timer />,
  };

  // Initialize bgColor
  let bgColor = "";

  // Set bgColor based on label
  switch (label) {
    case "Shipped":
      bgColor = "bg-blue-200";
      break;
    case "Delivered":
      bgColor = "bg-green-100";
      break;
    case "Completed":
      bgColor = "bg-green-100";
      break;
    case "Scheduled":
      bgColor = "bg-yellow-200";
      break;
    case "Rescheduled":
      bgColor = "bg-orange-300";
      break;
    case "In progress":
      bgColor = "bg-orange-300";
      break;
    case "Canceled":
      bgColor = "bg-red-300";
      break;
    case "Pending":
      bgColor = "bg-orange-300";
      break;
    case "Processing":
      bgColor = "bg-yellow-200";
      break;
    default:
      bgColor = "bg-gray-100";
  }

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold ${bgColor} w-fit text-black mx-auto`}
    >
      {label}
      {icons[label]}
    </div>
  );
};

export default StatusPill;
