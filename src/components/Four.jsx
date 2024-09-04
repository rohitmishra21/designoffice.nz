import React, { useState } from "react";
import Slider from "./Slider";
import Third from "./Third";

const Four = () => {
  const [num, setNum] = useState(0);

  const show = () => {
    setNum((prev) => 
prev + 1
     );
    
  };

  return (
    <>
      <div className="relative">
        {num === 0 && (
          <>
            <div className=" bg-[#ededed] w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative flex justify-between "></div>

              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>

              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
              <div className="border border-dotted z-10 border-black relative "></div>
            </div>
            <div className="w-full top-0 left-0  absolute  h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <h1 className="text-[3vw] leading-none tracking-tight text-center px-28">
                    Designers and clients dont't always speak the same language.
                    Our property translator insures optimal synergy between
                    creatives and corporates.{" "}
                  </h1>
                  <button
                    className="px-[80px] py-[15px]  bg-[#b0fb90] text-xl border border-black font-medium"
                    onClick={show}
                  >
                    Launch Translator
                  </button>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {num === 1 && (
          <>
            <Slider show={show} />
           
          </>
        )}
        {num === 2 && (
          <>
            <Third />
          </>
        )}
      </div>
    </>
  );
};

export default Four;
