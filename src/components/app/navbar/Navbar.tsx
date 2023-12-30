"use client";

import { useContext } from "react";
import Link from "next/link";
import { ViewContext } from "@/src/contexts/view";
import Hamburger from "@/src/assets/icons/ui/hamburger.svg";

const Navbar = () => {
  // ==========================================================================
  // STATE / HOOKS
  // ==========================================================================
  const { toggleSideNav } = useContext(ViewContext);

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <nav className="fixed w-screen h-[60px] z-10 top-0 left-0 bg-neutral-800">
      <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto px-4">
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-2 justify-center lg:hidden btn-white"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => toggleSideNav()}
          >
            <span className="sr-only">Open main menu</span>
            <Hamburger height={24} className="max-w-none text-contrast-high" />
          </button>
        </div>

        <div
          className={
            "hidden items-center justify-between w-full h-full lg:flex md:w-auto md:order-1"
          }
        >
          <ul className="flex flex-col w-full h-full items-center p-4 text-sh5 text-contrast-high md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="text-h4 text-primary-500">LOGO</div>
            </Link>
            {/* NAV LINKS */}
            <Link className="h-full" href="/">
              <li className="flex h-full align-center items-center border-b-4 border-b-transparent hover:border-b-primary-500">
                Link 1
              </li>
            </Link>
            <Link className="h-full" href="/">
              <li className="flex h-full align-center items-center border-b-4 border-b-transparent hover:border-b-primary-500">
                Link 2
              </li>
            </Link>
            <Link className="h-full" href="/">
              <li className="flex h-full align-center items-center border-b-4 border-b-transparent hover:border-b-primary-500">
                Link 3
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
