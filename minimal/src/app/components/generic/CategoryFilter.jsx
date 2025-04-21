// export default function CategoryFilter({ selected, onChange, categories }) {
//   return (
//     <select
//       className="border-2 border-gray-50 px-3 md:py-4 py-2 rounded-lg mb-4 focus-visible:outline-0"
//       value={selected}
//       onChange={(e) => onChange(e.target.value)}
//     >
//       <option value="">Select category</option>
//       {categories.map((cat) => (
//         <option key={cat} value={cat}>
//           {cat}
//         </option>
//       ))}
//     </select>
//   );
// }

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { Arrow, Tick } from "./icon";

export default function CategoryFilter({ selected, onChange, categories }) {
  return (
    <div className="relative w-full max-w-xs">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              "relative w-full cursor-default rounded-lg border-2 border-gray-50 bg-white py-2 md:py-4 pl-3 pr-10 text-left focus:outline-none",
              "text-gray-900 hover:cursor-pointer"
            )}
          >
            <span className="block truncate">
              {selected || "Select category"}
            </span>
            {/* <ChevronDownIcon
             
            /> */}
            <Arrow
              className=" size-6 absolute inset-y-0 right-2 top-1/2 -translate-y-1/2  text-gray-400"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm ">
            <ListboxOption
              value=""
              className={({ active }) =>
                clsx(
                  "relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ",
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                )
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={clsx(
                      "block truncate",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    Select category
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Tick className="size-6" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>

            {categories.map((cat) => (
              <ListboxOption
                key={cat}
                value={cat}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer",
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block truncate",
                        selected ? "font-medium" : "font-normal"
                      )}
                    >
                      {cat}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <Tick className="size-6" />
                      </span>
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
