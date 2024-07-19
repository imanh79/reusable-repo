"use client";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

const Dropmenu = () => {
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-200 py-1.5 px-3 text-sm font-semibold text-black shadow-inner shadow-gray-300 focus:outline-none hover:bg-gray-300 focus:bg-gray-300 focus:outline-1 focus:outline-gray-800">
          Options
          <ChevronDownIcon className="h-4 w-4 text-gray-600" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none closed:scale-95 closed:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-gray-100">
              <PencilIcon className="h-4 w-4 text-gray-400" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 group-focus:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-gray-100">
              <Square2StackIcon className="h-4 w-4 text-gray-400" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 group-focus:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-gray-200" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-gray-100">
              <ArchiveBoxXMarkIcon className="h-4 w-4 text-gray-400" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 group-focus:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-gray-100">
              <TrashIcon className="h-4 w-4 text-gray-400" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 group-focus:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Dropmenu;
