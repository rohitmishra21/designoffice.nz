import React, { useEffect, useState } from "react";
import Cooked from "./Cooked";
import Furniture from "./Furniture";
import Road from "./Road";
import Bharat from "./Bharat";
import Color from "./Color";
import Green from "./Green";
import Ace from "./Ace";
import Ora from "./Ora";
import Phone from "./Phone";
import Milk from "./Milk";
import gsap from "gsap";
const Work = () => {
  const [count, setCount] = useState(0);
  const changer = () => {
    setCount((prev) => {
      if (prev === 17) {
        prev = 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    gsap.from(".anim", {
      y: "100%",
      duration: 1,
    });
  }, [count]);

  return (
    <>
      <div onClick={changer} className=" w-full h-screen ">
        {count === 0 && (
          <>
            <div className="w-full h-screen bg-[#D6D6D6]">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
                <div className="border border-dotted z-40 border-black relative ">
                  <h1 className="text-[18vw] tracking-tighter leading-none big">
                    Click
                  </h1>
                </div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative">
                  <h1 className="text-[18vw] tracking-tighter leading-none big pl-24">
                    for
                  </h1>
                </div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative flex justify-between "></div>

                <div className="border border-dotted z-40 border-black relative ">
                  <h1 className="text-[18vw] tracking-tighter leading-none big">
                    work
                  </h1>
                </div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 1 && (
          <>
            <div className="anim  w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/ZkwJPiol0Zci9TWa_FENZ_YC_TheCookedBook1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C3660%2C2059&w=1000&h=1125&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 2 && (
          <>
            <Cooked />
          </>
        )}
        {count === 3 && (
          <>
            <div className="anim w-full h-screen bg-[url('https://images.prismic.io/motionsickness/936170f1-c946-42d6-8e21-8567f8bd2be3_DesignOffice_BigSave_Image6.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C3840%2C2160&w=1000&h=1125&dpr=2&q=50')] bg-cover bg-center">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 4 && (
          <>
            <Furniture />
          </>
        )}
        {count === 5 && (
          <>
            <div className="anim w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/55e174aa-1a6e-41b8-82dc-c96b4319962c_Designoffice_KBA_Image1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C4000%2C2480&w=1000&h=1240&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 6 && (
          <>
            <Road />
          </>
        )}
        {count === 7 && (
          <>
            <Bharat />
          </>
        )}

        {count === 8 && (
          <>
            <Color />
          </>
        )}

        {count === 9 && (
          <>
            <div className="anim w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/65df060d-5455-4102-9ac1-6f944cedf7a2_Frank-Energy_Press_Billboard-Cheap.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C1920%2C1280&w=1000&h=1333&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}

        {count === 10 && (
          <>
            <Green />
          </>
        )}
        {count === 11 && (
          <>
            <Ace />
          </>
        )}
        {count === 12 && (
          <>
            <div className="anim w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/Zk0JBiol0Zci9VVi_streetpostersone.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C3556%2C2000&w=1000&h=1125&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 13 && (
          <>
            <Ora />
          </>
        )}
        {count === 14 && (
          <>
            <div className="anim w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/577a2f70-3360-4516-a6d8-bfc97cad0f57_Designoffice_Christmas_Gift_img1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C10362%2C4922&w=1000&h=950&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 15 && (
          <>
            <Phone />
          </>
        )}
        {count === 16 && (
          <>
            <div className="anim w-full h-screen   bg-[url('https://images.prismic.io/motionsickness/Zkv6_Col0Zci9TT7_BoringHero.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&rect=0%2C0%2C3663%2C2405&w=1000&h=1313&dpr=2&q=50')] bg-cover  bg-center bg-no-repeat">
              <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
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

                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
                <div className="border border-dotted z-40 border-black relative "></div>
              </div>
            </div>
          </>
        )}
        {count === 17 && (
          <>
            <Milk />
          </>
        )}
      </div>
    </>
  );
};

export default Work;
