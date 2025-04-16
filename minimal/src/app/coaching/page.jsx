import React from "react";
import PlanCard from "../components/generic/PlanCard";
import constants from "../components/generic/constants";

function CoachingPage() {
  const {ProPlan , StarterPlan} = constants();
  return (
    <section className="md:p-12 p-4 bg-white shadow-dropdown flex lg:flex-row flex-col w-full justify-between gap-6 rounded-2xl">
      <div className="flex-1/2 md:space-y-6 space-y-4  max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">Meet your Fitness coach</h3>
        <video src="./random.mp4" controls className="max-h-[280px] w-full rounded-xl"></video>
        <div className="md:space-y-4 space-y-2">
          <div className="flex gap-4 items-center space-y-1">
            <div className="md:size-16 size-12 rounded-full border-4 border-white shadow-header bg-green-500 overflow-hidden flex shrink-0"><img src="./stokes.png" alt="image" className="md:h-16 h-12 object-cover " /></div>
            <div>
              <h6 className="text-lg md:text-2xl text-green-400 font-bold">Spenser Stokes</h6>
              <p className="text-dark-gray text-sm md:text-lg">Professional Fitness Trainer</p>
            </div>
          </div>
          <p className="text-sm md:text-xl text-green-300">Kickstart your exciting fitness journey today! Join us as we guide you through a dynamic daily workout plan tailored just for you.</p>
        </div>
      </div>
      <div className="flex-1/2 md:space-y-6 space-y-4 max-w-[608px]">
        <h3 className="md:text-2xl text-lg text-green-500 font-bold">Choose your fitness plan</h3>
        <PlanCard Plan={ProPlan} planName="Pro Plan" AnnualPrice="299" MonthlyPriceAsperYear="24.99" MonthlyPrice="49" />
        <PlanCard Plan={StarterPlan} planName="Starter Plan" AnnualPrice="180" MonthlyPriceAsperYear="15" MonthlyPrice="19" />
      </div>
    </section>
  );
}

export default CoachingPage;
