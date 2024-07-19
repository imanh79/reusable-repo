import { Button, Transition, TransitionChild } from "@headlessui/react";
import { useState } from "react";

const Togglemenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        onClick={() => setOpen((open) => !open)}
      >
        {" "}
        Toggle
      </Button>
      {/* The `show` prop controls all nested `TransitionChild` components. */}
      <Transition show={open}>
        {/* Backdrop */}
        <TransitionChild>
          <div
            className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
            onClick={() => setOpen(false)}
          />
        </TransitionChild>

        {/* Slide-in sidebar */}
        <TransitionChild>
          <div className="fixed inset-y-0 right-0 w-64 bg-white transition duration-300 data-[closed]:translate-x-full">
            lokk
          </div>
        </TransitionChild>
      </Transition>
    </div>
  );
};

export default Togglemenu;
