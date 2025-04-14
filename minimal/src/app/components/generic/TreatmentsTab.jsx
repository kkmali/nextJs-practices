import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import constants from "./constants";
import StatusPill from "./StatusPill";

function TreatmentsTab() {
  const {Tabtitle, OrdersTabTitle, tableHead, tableData} = constants();
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
              <div className="sm:px-7 md:py-2 py-3 px-3 flex md:flex-row flex-col gap-4 items-center rounded-2xl">
                {item.icon}
                {item.title}
              </div>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="shadow-dropdown bg-white rounded-b-2xl rounded-e-2xl md:p-12 p-4">
          <TabPanel>
            <TabGroup>
              <TabList className="flex gap-6 pb-3 border-b-3 border-light-gray mb-7 ">
                {OrdersTabTitle.map((item) => (
                  <Tab
                    key={item.title}
                    className="focus:outline-none data-[selected]:text-green-400 data-[selected]:font-bold data-[hover]:cursor-pointer data-[selected]:relative text-gray-50
                        data-[selected]:before:content-[''] data-[selected]:before:absolute
                        data-[selected]:before:bottom-[-15px]
                        data-[selected]:before:h-[3px]
                        data-[selected]:before:w-full
                        data-[selected]:before:bg-green-400"
                  >
                    {item.title}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <table className="w-full text-center border-separate border-spacing-y-6">
                    <thead>
                      <tr className="bg-light-gray">
                        {tableHead.map((item, index) => (
                          <th
                            key={item.label}
                            className={`text-dark-gray py-2.5 ${
                              index === 0 ? "rounded-l-lg" : ""
                            } ${
                              index === tableHead.length - 1
                                ? "rounded-r-lg"
                                : ""
                            }`}
                          >
                            {item.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td
                            className={`py-6 border-b border-light-gray ${
                              rowIndex === 0 ? "rounded-bl-2xl" : ""
                            }`}
                          >
                            {row.date}
                          </td>
                          <td className="border-b border-light-gray">
                            {row.type}
                          </td>
                          <td className="border-b border-light-gray">
                            {row.details}
                          </td>
                          <td className="border-b border-light-gray">
                            <StatusPill label={row.status} />
                          </td>
                          <td
                            className={`border-b border-light-gray ${
                              rowIndex === 0 ? "rounded-br-2xl" : ""
                            }`}
                          >
                            {row.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel>Content 2</TabPanel>
              </TabPanels>
            </TabGroup>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default TreatmentsTab;
