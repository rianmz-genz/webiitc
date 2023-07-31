import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const modalVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

function ModalSkema({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed z-10 inset-0 justify-center items-center overflow-hidden "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="py-10 px-10">
        <div
          className="fixed inset-0 -z-10 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="bg-white  z-40 rounded-lg text-left my-20 overflow-hidden shadow-xl mx-auto  transform transition-all  sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-end ">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400  hover:text-gray-500 focus:outline-none "
              >
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ModalSkema;
