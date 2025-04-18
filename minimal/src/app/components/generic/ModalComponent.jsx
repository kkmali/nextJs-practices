import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "../core/Button";
import { Cancle } from "./icon";

function ModalComponent({ isOpen, onClose, children }) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end md:items-center justify-center md:p-4">
          <DialogPanel className="w-full md:max-w-[720px] rounded-t-2xl md:rounded-b-2xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <DialogTitle
              as="h3"
              className="flex justify-between text-2xl font-extrabold text-black pb-6 border-b-2 border-light-gray mb-6"
            >
              Delivery Details
              <Button
                role="button"
                icon={<Cancle className="text-white" />}
                className="rounded-full size-5 bg-black p-0 m-0 hover:cursor-pointer"
                variant="tertiary"
                onClick={onClose}
              />
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default ModalComponent;
