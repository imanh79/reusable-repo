import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Navdropmenu = () => {
  return (
    <div className="flex w-full justify-center pt-20">
      <div className="flex gap-8">
        <div className="text-sm/6 font-semibold text-gray-700 dark:text-white/50">
          Products
        </div>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-gray-700 dark:text-white/50 focus:outline-none data-[active]:text-black dark:data-[active]:text-white data-[hover]:text-black dark:data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-gray-800 dark:data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-gray-200 dark:divide-white/5 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200 dark:hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  Insights
                </p>
                <p className="text-gray-700 dark:text-white/50">
                  Measure actions your users take
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200 dark:hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  Automations
                </p>
                <p className="text-gray-700 dark:text-white/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200 dark:hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  Reports
                </p>
                <p className="text-gray-700 dark:text-white/50">
                  Keep track of your growth
                </p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-gray-200 dark:hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-gray-900 dark:text-white">
                  Documentation
                </p>
                <p className="text-gray-700 dark:text-white/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div className="text-sm/6 font-semibold text-gray-700 dark:text-white/50">
          Pricing
        </div>
      </div>
    </div>
  );
};

export default Navdropmenu;
