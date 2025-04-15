import React from "react";
import StatusPill from "./StatusPill";
import Button from "../core/Button";
import {Bill} from "./icon";

function Modalbox({action}) {
  return (
    <>
      <div className="space-y-6 mb-6">
        <div className="flex items-center gap-6 bg-gray-200 p-3 rounded-xl ">
          <img
            src="/Product Image Container.png"
            alt="Product"
            className=" h-[94px] rounded-md object-cover"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-green-500">
              Compound Semaglutide
            </h3>
            <p className="text-sm text-green-800">Injectable GLP-1 treatment</p>
            <p className="text-sm text-green-800">
              Price:
              <span className="font-bold text-black ml-2">$450</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-semibold">12/12/2024</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Type</p>
            <p className="font-semibold">Semaglutide</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Details</p>
            <p className="font-semibold">0.25 mg</p>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Status</p>
            <span>
              <StatusPill label="Pending" className="!m-0" />
            </span>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl sm:col-span-2">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold">$159.00</p>
          </div>
        </div>
      </div>
      {action === "payment" ? (
        <Button
          label="Payment"
          icon=<Bill className="size-6" />
          fullWidth
          className="text-base md:text-lg "
        />
      ) : (
        <Button
          label="Schedule to be charge"
          icon=<Bill className="size-6" />
          fullWidth
          className="text-base md:text-lg"
        />
      )}
    </>
  );
}

export default Modalbox;
