import { Button } from "@nextui-org/react";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <main className="flex flex-col  bg-white rounded-lg gap-3 p-2">
              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">Name</p>
                <p>John Doe</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">ID</p>
                <p>12345676</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">Status</p>
                <p>Active</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">Type</p>
                <p>Police</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">Current Task</p>
                <p>Responding</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#7E8088]">COntact</p>
                <p>555-1234</p>
              </div>

              <Button
                className="bg-[#2D8076] text-white"
                startContent={
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2090_801)">
                      <path
                        d="M4.84125 14.9437L1.5 17.5687V3.69373C1.5 3.49481 1.57902 3.30405 1.71967 3.1634C1.86032 3.02274 2.05109 2.94373 2.25 2.94373H15.75C15.9489 2.94373 16.1397 3.02274 16.2803 3.1634C16.421 3.30405 16.5 3.49481 16.5 3.69373V14.1937C16.5 14.3926 16.421 14.5834 16.2803 14.7241C16.1397 14.8647 15.9489 14.9437 15.75 14.9437H4.84125ZM4.32225 13.4437H15V4.44373H3V14.4825L4.32225 13.4437ZM8.25 8.19373H9.75V9.69373H8.25V8.19373ZM5.25 8.19373H6.75V9.69373H5.25V8.19373ZM11.25 8.19373H12.75V9.69373H11.25V8.19373Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2090_801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.693726)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              >
                Send Message
              </Button>

              <Button
                className="bg-[#FF3B3B] text-white"
                startContent={
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2090_806)">
                      <path
                        d="M9.64945 2.94375L16.7939 15.3188C16.8598 15.4328 16.8944 15.5621 16.8944 15.6937C16.8944 15.8254 16.8598 15.9547 16.794 16.0687C16.7281 16.1828 16.6335 16.2774 16.5194 16.3433C16.4054 16.4091 16.2761 16.4438 16.1444 16.4438H1.85545C1.7238 16.4438 1.59447 16.4091 1.48046 16.3433C1.36644 16.2774 1.27177 16.1828 1.20594 16.0687C1.14012 15.9547 1.10547 15.8254 1.10547 15.6937C1.10547 15.5621 1.14012 15.4328 1.20595 15.3188L8.35045 2.94375C8.41628 2.82975 8.51095 2.73508 8.62497 2.66926C8.73898 2.60344 8.8683 2.56879 8.99995 2.56879C9.13159 2.56879 9.26092 2.60344 9.37493 2.66926C9.48894 2.73508 9.58362 2.82975 9.64945 2.94375ZM3.15445 14.9438H14.8454L8.99995 4.81875L3.15445 14.9438ZM8.24995 12.6938H9.74995V14.1938H8.24995V12.6938ZM8.24995 7.44375H9.74995V11.1938H8.24995V7.44375Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2090_806">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.693726)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              >
                Send Alert
              </Button>
            </main>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
