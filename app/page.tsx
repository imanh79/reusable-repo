"use client";
import Accordion from "@/components/Accordion";
import Dropmenu from "@/components/Dropmenu";
import Headlessui from "@/components/Dropmenu";
import Inputjs from "@/components/Input";
import Modal from "@/components/Modal";
import Navdropmenu from "@/components/Navdropmenu";
import OtpInput from "@/components/OtpInput";
import Switchcheck from "@/components/Switchcheck";
import Tabs from "@/components/Tabs";
import Togglemenu from "@/components/Togglemenu";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Dropmenu />
        </div>
        {/* <div className="bg-white p-4 border rounded shadow flex justify-center"><Accordion /></div> */}
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Modal />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Navdropmenu />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Inputjs />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <OtpInput />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Switchcheck />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Tabs />
        </div>
        <div className="bg-white p-4 border rounded shadow flex justify-center">
          <Togglemenu />
        </div>
      </div>
    </div>
  );
}
