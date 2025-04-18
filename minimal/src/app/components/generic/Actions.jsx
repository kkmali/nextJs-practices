"use client";
import { useState } from "react";
import Button from "../core/Button";
import Dropdown from "../core/Dropdown";
import constants from "./constants";
import { Bill } from "./icon";
import ModalComponent from "./ModalComponent";
import Modalbox from "./Modalbox";

// function Actions({ action }) {
//   const { ActiondropDownMenuItems } = constants();
//   const [isOpen, setIsOpen] = useState(false);

//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);

//   const renderButton = () => {
//     if (action === "payment" || action === "schedule") {
//       return (
//         <>
//           <Button
//             label={action === "payment" ? "Payment" : "Schedule"}
//             role="button"
//             icon={<Bill className="md:size-6 size-4" />}
//             className="flex-row-reverse text-[10px] md:text-base"
//             variant="secondary"
//             onClick={open}
//           />
//           <ModalComponent isOpen={isOpen} onClose={close}>
//             <Modalbox action={action} />
//           </ModalComponent>
//         </>
//       );
//     } else {
//       return (
//         <Dropdown
//           className="text-green-600 text-3xl"
//           DropdownTitle="..."
//           DropdownItems={ActiondropDownMenuItems}
//           onClick={open}
//         />
//       );
//     }
//   };

//   return <div>{renderButton()}</div>;
// }

function Actions({ action }) {
  const { ActiondropDownMenuItems } = constants();
  const [isOpen, setIsOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null); // new

  const open = (actionType) => {
    setModalAction(actionType);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setModalAction(null);
  };

  const handleDropdownClick = (label) => {
    // You can map labels to action types or use direct label
    if (label === "Track order" || label === "View Receipt") {
      open(label.toLowerCase().replace(" ", "_")); // e.g., "track_order"
    }
  };

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
            onClick={() => open(action)}
          />
          <ModalComponent isOpen={isOpen} onClose={close}>
            <Modalbox action={modalAction} />
          </ModalComponent>
        </>
      );
    } else {
      return (
        <>
          <Dropdown
            className="text-green-600 text-3xl"
            DropdownTitle="..."
            DropdownItems={ActiondropDownMenuItems.map((item) => ({
              ...item,
              onClick: () => handleDropdownClick(item.label),
            }))}
          />
          <ModalComponent isOpen={isOpen} onClose={close}>
            <Modalbox action={modalAction} />
          </ModalComponent>
        </>
      );
    }
  };

  return <div>{renderButton()}</div>;
}

export default Actions;
