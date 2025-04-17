import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import constants from "./constants";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";

export default function RecipeTab() {
  const { RecipeTabTitle } = constants();
  return (
    <div>
      <TabGroup>
        <TabList className="flex  pb-3 border-b-3 border-light-gray mb-7 ">
          {RecipeTabTitle.map((item) => (
            <Tab
              key={item.title}
              className="flex-1/2 focus:outline-none data-[selected]:text-green-400 data-[selected]:font-bold data-[hover]:cursor-pointer data-[selected]:relative text-gray-50
                     data-[selected]:before:content-[''] data-[selected]:before:absolute
                     data-[selected]:before:bottom-[-15px]
                     data-[selected]:before:h-[3px]
                     data-[selected]:before:w-full
                     data-[selected]:before:left-0
                     data-[selected]:before:bg-green-400"
            >
              {item.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-6 ">
          <TabPanel className="space-y-4">
            <IngredientsList />
          </TabPanel>
          <TabPanel className="space-y-4">
            <InstructionsList />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
