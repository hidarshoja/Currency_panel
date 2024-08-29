import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constant/Menu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DesktopSidebar({
  desktopSidebarOpen,
  setDesktopSidebarOpen,
}) {
  const location = useLocation();
  return (
    <Transition.Root show={desktopSidebarOpen} as={Fragment}>
      <Transition.Child
        as={Fragment}
        enter=" ease-in-out transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave=" ease-in-out  transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="hidden lg:w-1/5 lg:flex lg:flex-col lg:bg-bg2 lg:overflow-y-auto lg:px-6 lg:pb-4 lg:h-screen border-l border-border1">
          <div className="flex items-center justify-between">
            <div className="flex h-16 shrink-0 items-center my-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 5000 5000">
                <path d="M4830.07 4783.01c-22.78,-98.7 -55.96,-195.34 -89.33,-291.23 -432.5,-1242.89 -865.87,-2485.48 -1299.02,-3728.16 -65.23,-187.13 -133.23,-373.35 -194.59,-561.74 -37.73,-115.84 -115.23,-175.35 -231.62,-190.66 -40.22,-5.29 -80.96,-9.2 -121.47,-9.31 -264.24,-0.75 -528.58,-4.39 -792.72,0.95 -250.94,5.08 -291.91,39.7 -373.94,274.81 -493.78,1415.25 -987.72,2830.43 -1480.9,4245.88 -28.38,81.44 -54.67,164.09 -74.52,247.93 -34.74,146.7 9.11,216.94 161.29,223.24 228.15,9.44 457.09,4.31 685.56,-0.69 114.14,-2.5 183.27,-65.94 216.78,-178.88 56.34,-189.89 115.18,-379.62 185.9,-564.47 46.91,-122.61 34.69,-208.47 -57.94,-312.09 -222.71,-249.15 -335.03,-550.9 -352.28,-885.68 298.51,800.69 762.85,1201.14 1423.5,1223.54 303.99,10.3 584.45,-59.36 841.22,-222.09 365.62,-231.72 580.47,-571.83 703.98,-981.85 7,51.59 5.39,100.04 -3.61,147.07 -54.69,285.76 -172.75,542.33 -370.95,756.44 -64.27,69.43 -75.4,131.57 -44.65,218.64 72.73,205.94 140.47,413.83 203.07,623.07 31.85,106.45 95.39,171.62 203.26,174.31 238.52,5.93 477.61,10.62 715.77,0.11 133.88,-5.91 177.47,-77.96 147.2,-209.14z" fill="#757575"/>
                <polygon points="2398.4,1271.29 2565.03,1271.29 2565.03,1104.66 2398.4,1104.66" fill="#757575"/>
                <polygon points="2398.4,3377.23 2565.03,3377.23 2565.03,3210.61 2398.4,3210.61" fill="#757575"/>
              </svg>
            </div>
            <div className="flex w-16 justify-center">
              <button
                type="button"
                className="mr-14"
                onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon
                  className="h-6 w-6 text-text1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-2">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className={`rounded-md bg-bg3 border border-border1 cursor-pointer `}
                    >
                      <Link
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-p2 text-text1 font-bold"
                            : "hover:bg-bg2 text-text2",
                          "flex items-start  gap-3 w-full rounded-md p-2 text-sm leading-6  "
                        )}
                      >
                        <span className="text-xl mr-2">{item.src}</span>
                        {item.name}
                       

                        {/* اگر آیتم‌ها دارای زیرمجموعه هستند */}
                        {item.children && (
                          <Disclosure as="div" dir="ltr">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    location.pathname === item.href
                                      ? "bg-green-200"
                                      : "hover:bg-yellow-200",
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
                                </Disclosure.Button>
                                <Disclosure.Panel as="ul" className="mt-1 px-2">
                                  {item.children.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.href}
                                        className={classNames(
                                          location.pathname === subItem.href
                                            ? "bg-green-200"
                                            : "hover:bg-yellow-200",
                                          "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                        )}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
}