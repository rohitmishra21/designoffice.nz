import React, { useState } from "react";
import { PiSpeakerSimpleNoneFill } from "react-icons/pi";


const Loader = () => {
  const [opacities, setOpacities] = useState([0, 0, 0, 0, 0, 0]);
  const [remove, setRemove] = useState(false);
  const [scales, setScales] = useState(1)
  

  

  const changer = () => {
    setOpacities((prev) => {
      const updatedOpacities = [...prev];
      const index = updatedOpacities.findIndex((value) => value === 0);

      if (index !== -1) {
        updatedOpacities[index] = 1;
      }
      else{
       
       setRemove(true)

      }
      return updatedOpacities;

    });
 

    setScales(scales+1)
  };
  return (
    <>
      <div className="z-50 fixed left-0 right-0">
        <div className='relative overflow-hidden w-full h-screen transition-all transiton-2s  bg-[url("https://images.prismic.io/motionsickness/ZkLYd0FLKBtrW1pz_2A9M38X.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75")] bg-no-repeat bg-cover bg-center '
          style={{
            display: remove ? "none" : "block",
            visibility: remove ? "hidden" : "vissible",
           
          }}
        >
          <div className="w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
            <div className="border border-dotted z-40 border-black relative ">
              <h1 className="font-bold text-3xl tracking-tighter uppercase">
                motion sikness
              </h1>
            </div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative ">
              <h1 className="font-bold text-3xl tracking-tighter uppercase">
                design office
              </h1>
            </div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative "></div>
            <div className="border border-dotted z-40 border-black relative flex justify-between ">
              <h1 className="text-[#b0fb90] text-xl font-bold">Enter</h1>
              <PiSpeakerSimpleNoneFill />
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
            <div className="border border-dotted z-40 border-black relative "></div>
          </div>
          <div className=" absolute top-1/2 text-[6vw] z-40 text-[#b0fb90] w-full capitalize font-semibold -translate-x-1/2 -translate-y-1/2 text-center"
          style={{
            transform: `scale(${scales})`
          }}
          >
            <h1> design office</h1>
          </div>
          <div className="absolute top-[80%] left-1/2  -translate-x-1/2 -translate-y-1/2 z-50">
            <button className="px-[30px] py-[8px] bg-white text-xl border border-black font-medium" onClick={changer}>
              Make the logo bigger
            </button>
          </div>
          <div className="image-contaner">
            <div className="w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/ZkLUv0FLKBtrW1pX_BE6JJ1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[0]
              }}
              />
            </div>
            <div className="w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/bcea7b5f-798b-425d-b569-cfc51197da51_design-office-3.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[1]
              }}
              />
            </div>
            <div className="h-auto overflow-hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/3fe792dc-edf2-49a1-b186-848f3b30b3a8_test.jpeg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[2]
              }}
              />
            </div>
            <div className="w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/ZkLw1UFLKBtrW1t3_Desighoffice_Royaltyfree_2.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[3]
              }}
              />
            </div>
            <div className="w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/b90670ba-30fa-41aa-9702-009166c4e0e0_DesignOffice_Stock_1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[4]
              }}
              />
            </div>
            <div className="w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://images.prismic.io/motionsickness/ZkQquyol0Zci9IwC_2BF0NWK.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75" 
              alt="" 
              style={{
                opacity:opacities[5]
              }}
              />
            </div>
          </div>
        
        </div>

      </div>
    </>
  );
};

export default Loader;
