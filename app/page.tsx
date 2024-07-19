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
    <div className="">
      <Dropmenu />
      {/* <Accordion /> */}
      <Modal />
      <Navdropmenu />
      <Inputjs />
      <OtpInput />
      <Switchcheck/>
      <Tabs />
      <Togglemenu />
    </div>
  );
}
