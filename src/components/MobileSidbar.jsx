import { Fragment } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { navigation } from "../constant/Menu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative mr-0 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-[82%] top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-gray-800"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-yellow-50 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 5000 5000">
                <path d="M4830.07 4783.01c-22.78,-98.7 -55.96,-195.34 -89.33,-291.23 -432.5,-1242.89 -865.87,-2485.48 -1299.02,-3728.16 -65.23,-187.13 -133.23,-373.35 -194.59,-561.74 -37.73,-115.84 -115.23,-175.35 -231.62,-190.66 -40.22,-5.29 -80.96,-9.2 -121.47,-9.31 -264.24,-0.75 -528.58,-4.39 -792.72,0.95 -250.94,5.08 -291.91,39.7 -373.94,274.81 -493.78,1415.25 -987.72,2830.43 -1480.9,4245.88 -28.38,81.44 -54.67,164.09 -74.52,247.93 -34.74,146.7 9.11,216.94 161.29,223.24 228.15,9.44 457.09,4.31 685.56,-0.69 114.14,-2.5 183.27,-65.94 216.78,-178.88 56.34,-189.89 115.18,-379.62 185.9,-564.47 46.91,-122.61 34.69,-208.47 -57.94,-312.09 -222.71,-249.15 -335.03,-550.9 -352.28,-885.68 298.51,800.69 762.85,1201.14 1423.5,1223.54 303.99,10.3 584.45,-59.36 841.22,-222.09 365.62,-231.72 580.47,-571.83 703.98,-981.85 7,51.59 5.39,100.04 -3.61,147.07 -54.69,285.76 -172.75,542.33 -370.95,756.44 -64.27,69.43 -75.4,131.57 -44.65,218.64 72.73,205.94 140.47,413.83 203.07,623.07 31.85,106.45 95.39,171.62 203.26,174.31 238.52,5.93 477.61,10.62 715.77,0.11 133.88,-5.91 177.47,-77.96 147.2,-209.14z" fill="#757575"/>
                <polygon points="2398.4,1271.29 2565.03,1271.29 2565.03,1104.66 2398.4,1104.66" fill="#757575"/>
                <polygon points="2398.4,3377.23 2565.03,3377.23 2565.03,3210.61 2398.4,3210.61" fill="#757575"/>
              </svg>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            className={classNames(
                              location.pathname === item.href
                                ? "bg-p2 text-text1"
                                : "text-text2",
                              "flex items-start gap-3 py-2 border border-border1 rounded-md"
                            )}
                           
                          >
                            <span className="text-xl mr-2">{item.src}</span>
                            {!item.children ? (
                              <Link
                                to={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={classNames(
                                  item.current
                                    ? ""
                                    : " hover:text-gray-700",
                                  "block rounded-md pr-2 pl-10 text-sm leading-6 font-semibold"
                                )}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <Disclosure as="div" dir="ltr">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-50"
                                          : "hover:bg-gray-50 hover:text-gray-700",
                                        "flex items-center justify-end w-full rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                                      )}
                                    >
                                      <ChevronRightIcon
                                        className={classNames(
                                          open
                                            ? "rotate-90 text-gray-500"
                                            : "text-gray-700 rotate-180",
                                          "h-5 w-5 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </Disclosure.Button>
                                    <Disclosure.Panel
                                      as="ul"
                                      className="mt-1 px-2"
                                    >
                                      {item.children.map((subItem) => (
                                        <li key={subItem.name}>
                                          <Disclosure.Button
                                            as={Link}
                                            to={subItem.href}
                                            onClick={() =>
                                              setSidebarOpen(false)
                                            }
                                            className={classNames(
                                              subItem.current
                                                ? "bg-gray-50"
                                                : "hover:bg-gray-50 hover:text-gray-700",
                                              "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                            )}
                                          >
                                            {subItem.name}
                                          </Disclosure.Button>
                                        </li>
                                      ))}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li></li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
