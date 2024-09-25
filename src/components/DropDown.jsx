import { useState } from 'react';
import { Menu } from '@headlessui/react';

export default function Dropdown({title, options}) {
  //const [selected, setSelected] = useState("Select an option");
  return (
    <div className="relative inline-block text-left w-full">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex w-full justify-between border-y border-gray-300  px-4 py-3 text-sm font-medium text-black hover:bg-gray-50">
              {title}
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {options.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <button
                        //onClick={() => setSelected(option)}
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm text-slate-gray w-full text-left`}
                      >
                        {option.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
