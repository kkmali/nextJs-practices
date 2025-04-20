import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Button from "./Button";

function Dropdown({ className, DropdownTitle, DropdownItems }) {
  return (
    <Menu>
      <MenuButton className={`${className}`}>
        <span>{DropdownTitle}</span>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="flex flex-col md:gap-2 origin-top-right rounded-xl p-2 md:p-4 mt-4 text-white transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 shadow-dropdown bg-white z-11"
      >
        {DropdownItems.map((item, index) =>
          item.role === "button" ? (
            <MenuItem key={item.label}>
              <Button
                label={item.label}
                icon={item.icon}
                className={item.className}
                variant={item.variant}
                size={item.size}
                role={item.role}
                onClick={item.onClick ?? (() => console.log("clicked"))}
              />
            </MenuItem>
          ) : (
            <MenuItem key={item.label}>
              <Button
                label={item.label}
                icon={item.icon}
                className={item.className}
                variant={item.variant}
                size={item.size}
                role={item.role}
              />
            </MenuItem>
          )
        )}
      </MenuItems>
    </Menu>
  );
}

export default Dropdown;
