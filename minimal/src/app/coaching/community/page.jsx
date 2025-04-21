import Button from "@/app/components/core/Button";
import React from "react";

function CommunityPage() {
  return (
    <div className=" bg-white md:h-[587px]  w-full rounded-2xl p-3 md:p-12">
      <div className="bg-gray-200 h-full w-full flex items-center py-12 px-3">
        <div className="space-y-6 max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h5 className="text-lg text-black font-bold">
            Join the Fitness Community!
          </h5>
          <p className="text-black ">
            Access exclusive forums, connect with like-minded fitness
            enthusiasts, and get tips directly from experts. <br />
            Upgrade your fitness journey by unlocking this feature with the Pro
            Plan.
          </p>
          <Button
            label="Acquire plan now"
            variant="primary"
            className="sm:px-12 px-6 py-3 text-lg"
            type="link"
            url="/coaching"
          />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
