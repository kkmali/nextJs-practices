import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function RecipeTab({ TabTitle, ingredients, instructions }) {
  return (
    <div>
      <TabGroup>
        <TabList className="flex  pb-3 border-b-3 border-light-gray mb-7 ">
          {TabTitle.map((tab) => (
            <Tab
              key={tab.title}
              className="flex-1/2 focus:outline-none data-[selected]:text-green-400 data-[selected]:font-bold data-[hover]:cursor-pointer data-[selected]:relative text-gray-50
                     data-[selected]:before:content-[''] data-[selected]:before:absolute
                     data-[selected]:before:bottom-[-15px]
                     data-[selected]:before:h-[3px]
                     data-[selected]:before:w-full
                     data-[selected]:before:left-0
                     data-[selected]:before:bg-green-400"
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-6 ">
          <TabPanel className="space-y-4">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-sm bg-white shadow-dropdown flex justify-between md:text-base text-sm gap-5"
              >
                <p>{item.name}</p>
                <p>{item.quantity}</p>
              </div>
            ))}
          </TabPanel>
          <TabPanel className="space-y-4">
            {instructions.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-sm bg-white shadow-dropdown  md:text-base text-sm"
              >
                <h4 className="text-lg font-semibold text-black mb-2.5">
                  {item.step}
                </h4>
                <ul className="list-disc ml-4 text-sm">
                  {item.instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ul>
              </div>
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
