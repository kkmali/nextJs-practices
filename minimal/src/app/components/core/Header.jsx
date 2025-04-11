import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import Button from "./Button";
import constants from "../generic/constants";

export default function Header() {
  const {dropDownMenuItems} = constants();
  return (
    <header className="bg-white shadow-500 rounded-b-2xl">
      <div className="container">
        <div className="flex justify-between items-center md:py-6 py-4">
          <div>
            <img src="./logo.png" alt="minimal-logo" className="md:h-16 h-9" />
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-10">
            <div className="relative md:size-12 size-7 rounded-full bg-green-600 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:size-6 size-3.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z"
                  fill="white"
                />
              </svg>
              <div className="absolute md:size-5 size-2.5 rounded-full bg-red-500 flex justify-center items-center -top-1 -right-0.5">
                <span className="md:text-xs text-[6px] font-black text-white">
                  1
                </span>
              </div>
            </div>
            <div>
              <div>
                <Menu>
                  <MenuButton className="rounded-full size-9 md:size-16 border-4 border-white bg-light-gray shadow-500 hover:cursor-pointer ">
                    <span className="md:text-xl text-xs font-black text-green-500">
                      VP
                    </span>
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="flex flex-col gap-2 md:gap-4 origin-top-right rounded-xl p-2 md:p-4 mt-4 text-white transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 shadow-2xl bg-white"
                  >
                    {dropDownMenuItems.map((item, index) => {
                      return (
                        <MenuItem key={index}>
                          <Button
                            label={item.label}
                            icon={item.icon}
                            className={item.className}
                            variant={item.variant}
                            size={item.size}
                            role={item.role}
                            href={item.href}
                          />
                        </MenuItem>
                      );
                    })}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
