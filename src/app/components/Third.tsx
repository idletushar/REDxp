import React from "react";
import Image from "next/image";

function Third() {
  return (
    <div>
      {/* <div className=" visible lg:invisible md:ml-3 md:mr-3 md:rounded-tr-xl md:rounded-tl-xl md:bg-red-100 md:border-black md:align-middle p-2 mt-3 ">
        <p className="text-gray-400">Current Plan Duration:</p>
        <p className="text-gray-400">Subscription Amount:</p>
        <p className="text-gray-400">Plan Expiry Date:</p>
      </div> */}

      <div className=" mt-20">
        <div>
          <div className="flex items-center justify-center justify-items-center">
            <p className="text-black font-bold">Offers For You</p>
          </div>
          <div className="px-4 max-w-screen-xl overflow-x-auto flex lg:justify-center mt-5 ">
            <div className="m-1 flex-shrink-0">
              <Image
                src="/rectange-card-1.svg"
                height="200"
                width="410"
                alt=""
              ></Image>
            </div>
            <div className="m-1 flex-shrink-0">
              <Image
                src="/rectangle-card-2.svg"
                height="400"
                width="500"
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        {/* mobile view */}
        <div className="flex items-center justify-center justify-items-center">
          <p className="text-black font-bold">Offers For You</p>
        </div>
        <div className="flex overflow-x-auto lg:justify-center p-4">
          <div className="m-2 flex-shrink-0">
            <Image src="/square-card-1.svg" height="220" width="230" alt="" />
          </div>
          <div className="m-2 flex-shrink-0">
            <Image src="/square-card-2.svg" height="220" width="230" alt="" />
          </div>
          <div className="m-2 flex-shrink-0">
            <Image src="/square-card-3.svg" height="220" width="230" alt="" />
          </div>
          <div className="m-2 flex-shrink-0">
            <Image src="/square-card-4.svg" height="220" width="230" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
