import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import constants from "./constants";
import OredersTab from "./OredersTab";

function TreatmentsTab() {
  const {Tabtitle} = constants();
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
              <div className="sm:px-7 md:py-2 py-3 px-3 flex md:flex-row flex-col gap-4 items-center rounded-2xl whitespace-nowrap">
                {item.icon}
                {item.title}
              </div>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="shadow-dropdown bg-white rounded-b-2xl rounded-e-2xl md:p-12 p-4">
          <TabPanel>
            <OredersTab />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default TreatmentsTab;
