import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import {
  Medical,
  Money,
  Store,
  Calendar,
  Shipping,
  Receipt,
} from "../generic/icon";
import { Order, Payments, Documents } from "./icon";

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
  const CoachingAsideBarData = [
    {
      title: "My fitness plan",
      href: "/coaching",
    },
    {
      title: "Nutrition",
      href: "/coaching/nutrition",
    },
    {
      title: "Community",
      href: "/coaching/community",
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
  const RecipeTabTitle = [
    {
      title: "Ingredients",
    },
    {
      title: "Instructions",
    },
  ];
  const tableHead = [
    { label: "Date" },
    { label: "Type" },
    { label: "Details" },
    { label: "Status" },
    { label: "Actions" },
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
  const ProPlan = [
    {
      title: "All Starter Features",
    },
    {
      title: "24/7 Coach Support",
    },
    {
      title: "Regular Coach Check-ins",
    },
    {
      title: "Challenge Enrollment",
    },
    {
      title: "Full Community Access",
    },
  ];
  const StarterPlan = [
    {
      title: "10% OFF - Partners Package",
    },
    {
      title: "Training Program (Monthly)",
    },
    {
      title: "Nutrition Guidance",
    },
    {
      title: "Access to Recipes",
    },
    {
      title: "Basic Community Access",
    },
  ];
  const Ingredients = [
    { name: "Lettuce", quantity: "1/4" },
    { name: "Onion", quantity: "1/4" },
    { name: "Quinoa", quantity: "1 Cup" },
    { name: "Olive Oil", quantity: "1 Cup" },
    { name: "Canned Tuna", quantity: "1 Large can" },
  ];
  const InstructionsList = [
    {
      step: "Cook the quinoa",
      instructions: [
        "Rinse the quinoa thoroughly under running water.",
        "In a small pot, combine the quinoa and 1 cup of water with a pinch of salt.",
        "Bring to a boil over medium-high heat, then reduce to low heat and simmer until the water is absorbed (about 12–15 minutes). Fluff with a fork.",
      ],
    },
    {
      step: "Sauté the onion",
      instructions: [
        "Heat the olive oil in a pan over medium heat.",
        "Add the chopped onion and sauté for 3–5 minutes until softened and lightly golden.",
      ],
    },
    {
      step: "Mix in the tuna",
      instructions: [
        "Drain the can of tuna (if packed in water) and add it to the pan with the onion.",
        "Cook for 2–3 minutes, stirring to combine and enhance the flavor.",
      ],
    },
    {
      step: "Assemble the bowl",
      instructions: [
        "Place the quinoa at the base of a bowl.",
        "Add the tuna and onion mixture on top.",
        "Drizzle a little extra olive oil and season with pepper to taste.",
      ],
    },
    {
      step: "Garnish and serve",
      instructions: [
        "Optionally, top with fresh parsley, a squeeze of lemon, or avocado slices for added flavor.",
      ],
    },
  ];
  const StorecardData = [
    {
      title: "Dumbbell Full-Body Workout Plan",
      price: "$9",
      description:
        "Transform your fitness routine with this dumbbell-only workout plan! Designed for efficiency, it offers two alternating full-body workout days per week, focusing on compound movements to build strength and muscle. Includes a deload week to ensure recovery and prevent overtraining. Perfect for all fitness levels.",
      buttonText: "View Product",
      imageSrc: "./dumbbell.png",
    },
    {
      title: "Dynamic Warm-Up Routine for Beginners",
      price: "$9",
      description:
        "Get ready to move with this dynamic warm-up routine! Tailored for beginners, it features simple yet effective stretches and mobility exercises to improve flexibility, reduce injury risk, and energize your body for the day. A dose of movement that fits easily into any schedule.",
      buttonText: "View Product",
      imageSrc: "./warm-up.png",
    },
    {
      title: "Understanding Progressive Overload",
      price: "$9",
      description:
        "Maximize your fitness results with the principle of progressive overload! Learn how to increase strength, muscle growth, and avoid plateaus through simple methods like increasing weight, reps, or improving form. This guide helps you track progress and apply the right techniques for continuous improvement.",
      buttonText: "View Product",
      imageSrc: "./progressive.png",
    },
    {
      title: "Working Out & Nutrition: Myth vs Fact",
      price: "$9",
      description:
        "Discover the truth behind common workout and nutrition myths. This guide debunks misconceptions like “More work is always better” and “Muscle confusion,” while highlighting effective strategies like progressive overload, balancing rest days, and hitting daily protein goals. Reach your fitness goals without the confusion.",
      buttonText: "View Product",
      imageSrc: "./nutrition.png",
    },
  ];
  const stores = [
    {
      id: 1,
      name: "Farfetch",
      logo: "./fartech.png",
      cashback: "5%",
      category: "Fashion",
    },
    {
      id: 2,
      name: "eBay",
      logo: "./ebay.png",
      cashback: "9%",
      category: "Marketplace",
    },
    {
      id: 3,
      name: "Best Buy",
      logo: "./best-buy.png",
      cashback: "6%",
      category: "Electronics",
    },
    {
      id: 4,
      name: "H&M",
      logo: "./h&m.png",
      cashback: "9%",
      category: "Fashion",
    },
    {
      id: 5,
      name: "Amazon",
      logo: "./fartech.png",
      cashback: "$5.00",
      category: "Marketplace",
    },
    {
      id: 6,
      name: "Walmart",
      logo: "./walmart.png",
      cashback: "$8.00",
      category: "Supermarket",
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
    CoachingAsideBarData,
    ProPlan,
    StarterPlan,
    RecipeTabTitle,
    Ingredients,
    InstructionsList,
    StorecardData,
    stores,
  };
};

export default constants;
