import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Navdropmenu = () => {
  return (
    <div className="flex w-full justify-center pt-20">
      <div className="flex gap-8">
        <div className="text-sm font-semibold text-gray-700">Products</div>
        <Popover>
          <PopoverButton className="block text-sm font-semibold text-gray-700 focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-gray-800">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-gray-200 rounded-xl bg-gray-100 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                href="#"
              >
                <p className="font-semibold text-gray-900">Insights</p>
                <p className="text-gray-700">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                href="#"
              >
                <p className="font-semibold text-gray-900">Automations</p>
                <p className="text-gray-700">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                href="#"
              >
                <p className="font-semibold text-gray-900">Reports</p>
                <p className="text-gray-700">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200"
                href="#"
              >
                <p className="font-semibold text-gray-900">Documentation</p>
                <p className="text-gray-700">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className="text-sm font-semibold text-gray-700">Pricing</div>
      </div>
    </div>
  );
};

export default Navdropmenu;
