import React from "react";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

const Button = ({
  label,
  variant,
  icon,
  role,
  url,
  className,
  loading,
  onClick,
  fullWidth = false,
  size = "md",
  target = "_self",
  disabled = false,
  type = "button",
  ...rest
}) => {
  const baseStyle =
    "inline-flex justify-center items-center gap-2.5 disabled:bg-purple-500  disabled:cursor-not-allowed  transition-ease";

  const sizes = {
    lg: "p-4 text-lg",
    md: "px-8 py-3 text-base",
    sm: "p-2 ",
  };

  const style = {
    primary: "bg-orange-200 text-white rounded-full  font-semibold",
    secondary: "bg-gray-50 text-white rounded-full  font-semibold",
    tertiary: "text-black font-medium rounded-md ",
  };

  return (
    <>
      {role === "button" ? (
        <button
          type={type || "button"}
          onClick={onClick}
          className={twMerge(
            baseStyle,
            sizes[size],
            style[variant || "primary"],
            className,
            fullWidth && "w-full"
          )}
          disabled={disabled}
          {...rest}
        >
          {label ? label : null}
          {icon ? icon : null}
        </button>
      ) : (
        <Link
          prefetch={false}
          onClick={onClick}
          href={url || "/"}
          className={twMerge(
            baseStyle,
            sizes[size],
            style[variant || "primary"],
            className,
            fullWidth && "w-full"
          )}
          target={target || "_self"}
          {...rest}
        >
          {label ? label : null}
          {icon ? icon : null}
        </Link>
      )}
    </>
  );
};

export default Button;
