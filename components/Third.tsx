import React from "react";
import Image from "next/image";

function Third() {
  return (
    <div>
      <div className=" mt-20">
        <div>
          <p className="text-black lg:pl-48 font-bold">Offers For You</p>
          <div className="px-4 max-w-screen-xl overflow-x-scroll no-scrollbar flex lg:justify-center lg:ml-6 mt-5 ">
            <div className="m-1 flex-shrink-0">
              <Image src="/img1.png" height="400" width="480" alt=""></Image>
            </div>
            <div className="m-1 flex-shrink-0">
              <Image src="/img2.png" height="400" width="480" alt=""></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        {/* mobile view */}
        <p className="text-black lg:pl-48 font-bold">Offers For You</p>
        <div className="flex overflow-x-scroll no-scrollbar lg:justify-center p-4">
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
