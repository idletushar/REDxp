"use client";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="lg:hidden bg-white fixed  w-full z-20 bottom-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto p-3">
        <ul className=" flex bg-white  items-center flex-row space-x-4 mt-0 border-0 ">
          <li>
            <div className="  mx-7">
              <Image src="/tv.svg" height="10" width="30" alt=""></Image>
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
                aria-current="page"
              >
                Watch
              </a>
            </div>
          </li>
          <li>
            <div className=" place-items-center  mx-7">
              <Image src="/ticket.svg" height="15" width="30" alt=""></Image>
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 mt-2 hover:text-red-700  "
              >
                Book
              </a>
            </div>
          </li>
          <li>
            <div className="  mx-7">
              <Image
                src="/diamond.svg"
                height="15"
                width="30"
                alt="red"
              ></Image>
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
              >
                Red
              </a>
            </div>
          </li>
          <li>
            <div className="  mx-7">
              <Image src="/user.svg" height="9" width="25" alt=""></Image>
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
              >
                Profile
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
