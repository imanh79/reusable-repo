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
    <div className="">
 
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-200 dark:bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-black dark:text-white shadow-inner shadow-gray-300 dark:shadow-white/10 focus:outline-none data-[hover]:bg-gray-300 dark:data-[hover]:bg-gray-700 data-[open]:bg-gray-300 dark:data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-gray-800 dark:data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-gray-600 dark:fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-gray-800 p-1 text-sm/6 text-black dark:text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-gray-400 dark:fill-white/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 dark:text-white/50 group-data-[focus]:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-gray-400 dark:fill-white/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 dark:text-white/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-gray-200 dark:bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-gray-400 dark:fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 dark:text-white/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
              <TrashIcon className="size-4 fill-gray-400 dark:fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-gray-500 dark:text-white/50 group-data-[focus]:inline">
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
