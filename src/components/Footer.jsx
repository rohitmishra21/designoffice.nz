import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" w-full h-screen">
          <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
            <div className="border border-dotted z-40 border-black relative ">
              <h1 className="text-[18vw] tracking-tighter leading-none big">
                Touch
              </h1>
            </div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative flex justify-between "></div>
            <div className="border border-dotted z-40 border-black relative ">
              <h1 className="text-[18vw] tracking-tighter leading-none big">
                base
              </h1>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
