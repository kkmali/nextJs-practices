"use client";
import {useState} from "react";
import Button from "../core/Button";
import Dropdown from "../core/Dropdown";
import constants from "./constants";
import {Bill} from "./icon";
import ModalComponent from "./ModalComponent";
import Modalbox from "./Modalbox";

function Actions({action}) {
  const {ActiondropDownMenuItems} = constants();
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const renderButton = () => {
    if (action === "payment" || action === "schedule") {
      return (
        <>
          <Button
            label={action === "payment" ? "Payment" : "Schedule"}
            role="button"
            icon={<Bill className="md:size-6 size-4" />}
            className="flex-row-reverse text-[10px] md:text-base"
            variant="secondary"
            onClick={open}
          />
          <ModalComponent isOpen={isOpen} onClose={close}>
            <Modalbox action={action} />
          </ModalComponent>
        </>
      );
    } else {
      return (
        <Dropdown
          className="text-green-600 text-3xl"
          DropdownTitle="..."
          DropdownItems={ActiondropDownMenuItems}
        />
      );
    }
  };

  return <div>{renderButton()}</div>;
}

export default Actions;
