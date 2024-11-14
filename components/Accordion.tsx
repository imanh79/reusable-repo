import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
 
const Accordion = () => {
  return (
    <div className=" w-full  px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-gray-200 divide-white/5 rounded-xl bg-gray-100 ">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black  group-data-[hover]:text-gray-800">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-gray-600  group-data-[hover]:fill-gray-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-gray-600 ">
            If youre unhappy with your purchase, well refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black  group-data-[hover]:text-gray-800 ">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-gray-600  group-data-[hover]:fill-gray-500 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-gray-600 /50">
            No.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
