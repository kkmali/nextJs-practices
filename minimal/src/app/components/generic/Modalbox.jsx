import React from "react";
import StatusPill from "./StatusPill";
import Button from "../core/Button";
import { Bill, Receipt, Shipping } from "./icon";

// function Modalbox({ action }) {
//   return (
//     <>
//       <div className="space-y-6 mb-6">
//         <div className="flex items-center gap-6 bg-gray-200 p-3 rounded-xl ">
//           <img
//             src="/Product Image Container.png"
//             alt="Product"
//             className=" h-[94px] rounded-md object-cover"
//           />
//           <div className="space-y-2">
//             <h3 className="text-xl font-bold text-green-500">
//               Compound Semaglutide
//             </h3>
//             <p className="text-sm text-green-800">Injectable GLP-1 treatment</p>
//             <p className="text-sm text-green-800">
//               Price:
//               <span className="font-bold text-black ml-2">$450</span>
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-gray-200 p-4 rounded-xl">
//             <p className="text-sm text-dark-gray">Date</p>
//             <p className="font-semibold">12/12/2024</p>
//           </div>

//           <div className="bg-gray-200 p-4 rounded-xl">
//             <p className="text-sm text-dark-gray">Type</p>
//             <p className="font-semibold">Semaglutide</p>
//           </div>

//           <div className="bg-gray-200 p-4 rounded-xl">
//             <p className="text-sm text-dark-gray">Details</p>
//             <p className="font-semibold">0.25 mg</p>
//           </div>

//           <div className="bg-gray-200 p-4 rounded-xl">
//             <p className="text-sm text-dark-gray">Status</p>
//             <span>
//               <StatusPill label="Pending" className="!m-0" />
//             </span>
//           </div>

//           <div className="bg-gray-200 p-4 rounded-xl sm:col-span-2">
//             <p className="text-sm text-dark-gray">Price</p>
//             <p className="font-semibold">$159.00</p>
//           </div>
//         </div>
//       </div>
//       {action === "payment" ? (
//         <Button
//           label="Payment"
//           icon=<Bill className="size-6" />
//           fullWidth
//           className="text-base md:text-lg "
//         />
//       ) : (
//         <Button
//           label="Schedule to be charge"
//           icon=<Bill className="size-6" />
//           fullWidth
//           className="text-base md:text-lg"
//         />
//       )}
//     </>
//   );
// }

function Modalbox({ action }) {
  const commonDetails = (
    <div className="space-y-6 mb-6">
      <div className="flex items-center gap-6 bg-gray-200 p-3 rounded-xl">
        <img
          src="/Product Image Container.png"
          alt="Product"
          className="h-[94px] rounded-md object-cover"
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
        <div className="bg-gray-200 p-4 space-y-2 rounded-xl">
          <p className="text-sm text-dark-gray">Date</p>
          <p className="font-semibold">12/12/2024</p>
        </div>
        <div className="bg-gray-200 p-4 space-y-2 rounded-xl">
          <p className="text-sm text-dark-gray">Type</p>
          <p className="font-semibold">Semaglutide</p>
        </div>
        <div className="bg-gray-200 p-4 space-y-2 rounded-xl">
          <p className="text-sm text-dark-gray">Details</p>
          <p className="font-semibold">0.25 mg</p>
        </div>
        <div className="bg-gray-200 p-4 space-y-2 rounded-xl">
          <p className="text-sm text-dark-gray">Status</p>
          <StatusPill label="Pending" className="!m-0" />
        </div>
        <div className="bg-gray-200 p-4 space-y-2 rounded-xl max-md:col-span-2">
          <p className="text-sm text-dark-gray">Price</p>
          <p className="font-semibold">$159.00</p>
        </div>
      </div>
    </div>
  );

  if (action === "payment") {
    return (
      <>
        {commonDetails}
        <Button
          label="Payment"
          icon={<Bill className="size-6" />}
          fullWidth
          className="text-base md:text-lg "
        />
      </>
    );
  }

  if (action === "schedule") {
    return (
      <>
        {commonDetails}
        <Button
          label="Schedule to be charged"
          icon={<Bill className="size-6" />}
          fullWidth
          className="text-base md:text-lg"
        />
      </>
    );
  }

  if (action === "track_order") {
    return (
      <>
        {commonDetails}
        <Button
          label="Track order "
          icon={<Shipping className="size-6" />}
          fullWidth
          className="text-base md:text-lg"
        />
      </>
    );
  }

  if (action === "view_receipt") {
    return (
      <>
        {commonDetails}
        <div className="grid sm:grid-cols-2 mb-6 gap-4">
          <div className="bg-gray-200 p-4 space-y-4 rounded-xl">
            <p className="text-sm text-dark-gray">Date</p>
            <div className="flex justify-between font-semibold gap-4 text-black">
              <p>Order ID</p>
              <p>#MED123456</p>
            </div>
            <div className="flex justify-between font-semibold gap-4 text-black">
              <p>Tracking Number</p>
              <p>TRK789012345</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 space-y-4 rounded-xl">
            <p className="text-sm text-dark-gray">Delivery Address</p>
            <p className="font-semibold">
              John Doe <br />
              123 Main Street, Apt 4B <br />
              New York, NY 10001
            </p>
          </div>
        </div>
        <Button
          label="View Receipts "
          icon={<Receipt className="size-6 text-white" />}
          fullWidth
          className="text-base md:text-lg"
        />
      </>
    );
  }

  return null;
}

export default Modalbox;
