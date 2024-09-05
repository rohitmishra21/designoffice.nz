import React, { useEffect, useState } from "react";
import Slider from "./Slider";
// import Third from "./Third";
import gsap from "gsap";

const Four = () => {
  const [num, setNum] = useState(0);
  const [changer, setChanger] = useState(true);

  const show = () => {
    setNum((prev) => prev + 1);
  };
  function bgChanger() {
    setChanger((p) => !p);
 
  }
  useEffect(() => {
    if (changer === false) {
      gsap.to(".circle", {
        x: "130%",
      });
    } else {
      gsap.to(".circle", {
        x: 0,
      });
    }
  
    
  }, [changer])
  
  return (
    <>
      <div className="relative">
        {num === 0 && (
          <>
            <div className="  w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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
              <div
                className="toper w-[80%] z-20 h-[70%]  relative "
                style={{
                  background: changer
                    ? "#E5D4BA"
                    : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmGzcN-57sW1aQ-0dK8nuRPjpyTcrbS7q4RYxFHWU5ks5FnTXTVVlLw9M4LXmSFklcVI&usqp=CAU)",
                  backgroundSize: "cover", // Image ko fit karta hai
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
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
                  <div
                    className=" h-10 w-20 bg-white border flex items-center border-black  rounded-full"
                    onClick={bgChanger}
                  >
                    <div className="circle h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {num === 1 && (
          <>
            <Slider />
          </>
        )}
      </div>
    </>
  );
};

export default Four;
