import Benefits from "@/app/components/generic/Benefits";
import { Fire, Timer } from "@/app/components/generic/icon";

function RecipesCard({
  DishName,
  time,
  kcal,
  children,
  className,
  DishclassName,
}) {
  return (
    <div
      className={`md:p-6 sm:p-4 p-2 flex gap-2 sm:gap-4 sm:items-center  rounded-2xl ${
        className ? className : "bg-white shadow-dropdown"
      }`}
    >
      <div className="lg:h-[127px] lg:w-[166px] size-24 overflow-hidden rounded-lg">
        <img
          src="https://s3-alpha-sig.figma.com/img/677b/0089/2b8f743ba0887122d37639928853328a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lCCZ0PnSwn~5ZIwzF-UmTFMfIUZz1oMmoG2nhuRLyp0R-323npj9z8ad2hTem4cM58KhvMXmyXXs1xas25YMG19~Pj4C3N9T2Ali-A7aKXFJWEVL2aHAx7rGjFmkO04-pnnpS0NC-j3jDNU8356BUskpJiREqHd5YvnKPzHENGiW95lU~2zcwxu47EWavHIEkcLHHHXD42rQI36BqVq9B0GvIxTEK0VCaAFHRbvIWize6~CvEZcfLigcDdgszsWpkJMq9EsVyFWlF7h-FGGs~YcnMYA2OIC5~7BWdSQiXP~JQzq-W~3FExeYqedyi99aeqwTrCkmCmcp20I54VvxMQ__"
          alt="food-image"
          className="lg:max-h-[127px] w-full max-h-24 object-cover"
        />
      </div>
      <div className="space-y-3">
        <h4
          className={` text-lg lg:text-2xl font-bold ${
            DishclassName ? DishclassName : "text-green-600"
          }$`}
        >
          {DishName}
        </h4>
        <div className="flex   gap-3">
          <div className="flex gap-2 items-center text-dark-gray">
            <Timer className="size-6" /> <span>{time}</span>
          </div>
          <div className="flex gap-2 items-center text-dark-gray">
            <Fire className="size-6" /> <span>{kcal}</span>
          </div>
        </div>
        {children ? (
          children
        ) : (
          <div className="flex   gap-3">
            <Benefits title="High Protein" />
            <Benefits title="Low Fat" />
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipesCard;
