import React from "react";
import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header({
  setSidebarOpen,
  desktopSidebarOpen,
  setDesktopSidebarOpen,
}) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-bg3 border-b border-border1 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-text1 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {!desktopSidebarOpen && (
        <button
          type="button"
          className="-m-2.5 p-2.5 text-text1 hidden lg:block"
          onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      <div className="flex flex-1 gap-x-4 justify-end lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-100 hover:text-green-600"
          >
            <span className="sr-only">پیام ها</span>
          </button>

          <Menu
            as="div"
            className="flex flex-wrap items-center justify-end gap-1"
          >
            <div className="px-3 cursor-pointer flex overflow-hidden bg-bg1 h-7 rounded-[11px] border border-border1">
              <div className="w-full flex items-center justify-center py-2 gap-1">
                <div>
                  <img
                    src="/img/zahra.svg"
                    className="w-[24px] h-[24px] rounded-[20px] border border-border1"
                    alt=""
                  />
                </div>
                <div className="text-text1 text-sm md:text-[14px]">
                  میلاد فاضلیان
                </div>
              </div>
            </div>
            <div className="w-[126px] flex overflow-hidden bg-[#FDCB44] h-7 rounded-[11px] border border-[#5B7380]">
              
              <div className="w-full bg-red1 flex items-center justify-center gap-1 cursor-pointer">
                <div className="text-white text-[12px]">خروج</div>
                <div>
                  <img
                    src="/img/exitW.svg"
                    className="w-[17px] h-[17px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
}
