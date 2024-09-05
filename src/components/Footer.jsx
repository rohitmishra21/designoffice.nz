import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  useEffect(() => {
    gsap.to(".fone", {
      width: "100%",

      ease: 0,
      scrollTrigger: {
        trigger: ".fotter",
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".ftwo", {
      width: "100%",

      ease: 0,
      scrollTrigger: {
        trigger: ".fotter",
        start: "top 60%",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <>
      <div>
        <div className=" relative w-full h-screen bg-[#e5e7eb]">
          <div className="fotter  w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative flex justify-between "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative flex items-end">
              <h1 className="text-xl font-medium">© 2024</h1>
            </div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative flex items-end">
              <h1 className="text-xl font-semibold">Motion Sickness</h1>
            </div>
            <div className="border border-dotted z-40 border-black relative "></div>{" "}
            <div className="border border-dotted z-40 border-black relative flex items-end">
              <h1 className="text-xl font-semibold">Instagram</h1>
            </div>
            <div className="border border-dotted z-40 border-black relative flex items-end">
              <h1 className="text-xl font-semibold">Toitū Te Tiriti</h1>
            </div>
          </div>
          <div className="absolute w-full h-screen top-0 whitespace-nowrap    ">
            <div>
              <h1 className="fone w-0 overflow-hidden text-[16vw] tracking-tighter   leading-none big ">
                Luke warm
              </h1>
            </div>
            <div>
              <h1 className=" ftwo  w-0 overflow-hidden text-[16vw] tracking-tighter    leading-none big ">
                regards,
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
