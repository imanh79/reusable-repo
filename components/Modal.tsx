"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={open}
        className="w-32 h-12 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Open dialog
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onClose={close} className="relative z-50">
            <motion.div
              className="fixed inset-0 bg-black/50 blurEffect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DialogPanel>
                  <DialogTitle className="text-lg font-semibold text-gray-900">
                    Deactivate Account
                  </DialogTitle>
                  <Description className="text-sm text-gray-600">
                    This will permanently deactivate your account
                  </Description>
                  <p className="text-gray-700 pb-6">
                    Are you sure you want to deactivate your account?
                  </p>
                  <div className="flex gap-4 justify-end">
                    <button
                      onClick={close}
                      className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={close}
                      className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      Deactivate
                    </button>
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
