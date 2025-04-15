import React from "react";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import StatusPill from "./StatusPill";
import constants from "./constants";
import Actions from "./Actions";

function OredersTab() {
  const {OrdersTabTitle, tableHead, tableData} = constants();

  return (
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
                    className={`text-dark-gray py-2.5
                  ${index === 0 ? "rounded-l-lg" : ""}
                  ${index === tableHead.length - 1 ? "rounded-r-lg" : ""}
                  ${index === 2 ? "hidden md:table-cell" : ""}
                `}
                  >
                    {item.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="md:text-base text-[10px]">
                  <td
                    className={`py-6 border-b border-light-gray text-green-400 ${
                      rowIndex === 0 ? "rounded-bl-2xl" : ""
                    }`}
                  >
                    {row.date}
                  </td>
                  <td className="border-b border-light-gray text-green-600 font-bold">
                    {row.type}
                  </td>
                  <td className="border-b border-light-gray text-green-400 max-md:hidden">
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
                    {/* {row.action} */}
                    <Actions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>Content 2</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default OredersTab;
