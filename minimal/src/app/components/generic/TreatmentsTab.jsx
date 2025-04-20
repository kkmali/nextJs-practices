import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import constants from "./constants";
import OredersTab from "./OredersTab";
import Documents from "./Documents";

function TreatmentsTab() {
  const { Tabtitle } = constants();
  return (
    <div className="md:container">
      <TabGroup>
        <TabList className="group flex md:w-fit w-full shadow-dropdown rounded-t-2xl overflow-hidden">
          {Tabtitle.map((item) => (
            <Tab
              key={item.title}
              className="md:p-3 focus:outline-none bg-gray-200 text-gray-50 data-[selected]:bg-white
             data-[selected]:text-green-500 data-[selected]:font-bold  data-[hover]:cursor-pointer  w-full "
            >
              <div className="sm:px-7 md:py-2 py-3 px-3 flex md:flex-row flex-col gap-2 md:gap-4 items-center rounded-2xl text-sm md:text-lg  whitespace-nowrap">
                {item.icon}
                {item.title}
              </div>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="shadow-dropdown bg-white md:rounded-b-2xl md:rounded-e-2xl md:p-12 p-4">
          <TabPanel>
            <OredersTab />
          </TabPanel>
          <TabPanel>
            <Documents />
          </TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default TreatmentsTab;
