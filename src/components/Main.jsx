import React, { useEffect, useState } from "react";
import { PiSpeakerSimpleNoneFill } from "react-icons/pi";
import gsap from "gsap";


const Main = () => {
  const [ydirection, setYdirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ydirection === 0) {
        gsap.to(".imggg", {
          y: "100%",
          duration: 1,
          onComplete: () => {
            gsap.to(".imggg", {
              y: "0",
            });
            setYdirection(1);
          },
        });
      }
      if (ydirection === 1) {
        gsap.to(".photo", {
          y: "100%",
          duration: 1,
          onComplete: () => {
            gsap.to(".photo", {
              y: "0",
            });
            setYdirection(2);
          },
        });
      }
      if (ydirection === 2) {
        gsap.to(".third", {
          y: "100%",
          duration: 1,
          onComplete: () => {
            gsap.to(".third", {
              y: 0,
            });

            setYdirection(0);
          },
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [ydirection]);

  return (
    <>
      <div>
        <div className="relative overflow-hidden w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
          <div className="border border-dotted z-30 border-black relative ">
            <h1 className="font-extrabold text-3xl tracking-tighter uppercase fixed">
              motion sickness
            </h1>
          </div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative ">
            <h1 className="font-extrabold text-3xl tracking-tighter uppercase fixed">
              design office
            </h1>
          </div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative ">
            <h1 className=" text-xl font-bold fixed">About</h1>
          </div>
          <div className="border border-dotted z-30  border-black relative flex justify-between ">
            <h1 className=" text-xl font-bold fixed">Contact</h1>
            <PiSpeakerSimpleNoneFill  className=""/>
          </div>

          <div className="border border-dotted z-30 border-black relative ">
            <p className="text-lg font-semibold z-10 relative tracking-tighter">
              Welcome to the Motion Sickness Design Office, an artificial space
              created within the physical plane of our existing, everyday
              office. The purpose of this space is to help us delineate when
              it’s time to take off our generalised goggles, and instead don
              design-tinted spectacles.
            </p>
          </div>
          <div className="border border-dotted z-30 border-black relative ">
            <p className="text-lg font-semibold z-10 relative tracking-tighter">
              So, while the pictured office chairs with their questionable
              stains will be noticeably absent in actuality, you will still find
              a whole new approach. Here, rather than asking brands what they
              want to say, we help them discover who they want to be.
            </p>
          </div>
          <div className="border border-dotted z-30 border-black relative ">
            <p className="text-lg font-semibold z-10 relative tracking-tighter">
              Some would say we give brands a Retinol enriched facial. And,
              while we make them look good, the work we do is much deeper. We
              nurse the identity wounds brands carry in a psycho-spiritual
              retreat of sorts. So, are you ready to chaperone yours into our
              artificial space for real design?
            </p>
          </div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative "></div>

          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative ">
            <p className="text-lg font-semibold z-10 relative tracking-tighter">
              An advertising agency and a design agency living in the same
              house, but sleeping in separate beds - a marriage of unique
              strength, with the emotional space to be one's own self.
            </p>
          </div>
          <div className="border border-dotted z-30 border-black relative ">
            <p className="text-lg font-semibold z-10 relative tracking-tighter pt-16">
              Motion Sickness Design Office. An artificial space for real
              design.
            </p>
          </div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative "></div>
          <div className="border border-dotted z-30 border-black relative "></div>
        </div>
        <div className="img-contaner">
          {ydirection === 0 && (
            <>
              <div className=" w-[18%] z-30 absolute bottom-3 left-[33%] overflow-hidden">
                <img
                  src="https://images.prismic.io/motionsickness/ZkQquyol0Zci9IwC_2BF0NWK.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=300&dpr=2&q=50"
                  alt=""
                  className="imggg "
                />
              </div>
              <div className=" w-[30%] overflow-hidden   absolute top-3  right-5 ">
                <img
                  src="https://images.prismic.io/motionsickness/ZkLYd0FLKBtrW1pz_2A9M38X.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75"
                  alt=""
                  className="imggg relative"
                />
              </div>
            </>
          )}
          {ydirection === 1 && (
            <>
              <div className=" w-[30%] z-30 absolute top-3 left-0 overflow-hidden ">
                <img
                  src="https://images.prismic.io/motionsickness/bcea7b5f-798b-425d-b569-cfc51197da51_design-office-3.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=75  "
                  alt=""
                  className="photo"
                />
              </div>
              <div className=" w-[30%]  absolute bottom-0  right-0 overflow-hidden">
                <img
                  src="https://images.prismic.io/motionsickness/b90670ba-30fa-41aa-9702-009166c4e0e0_DesignOffice_Stock_1.jpg?ixlib=js-3.3.0&auto=format%2C%20compress&w=1000&dpr=1&q=7"
                  alt=""
                  className="photo"
                />
              </div>
            </>
          )}

          {ydirection === 2 && (
            <>
              <div className=" w-[18%]  absolute bottom-3 overflow-hidden  left-0">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlQXZP4sEVM3oxw4vAxo58e-Vq1ktfY2ft-mTVdDzbj-sjHih4"
                  alt=""
                  className="third"
                />
              </div>
              <div className=" w-[18%]  absolute top-4 overflow-hidden right-[30%]">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDekma7QcNO37hIvpFlcg0wn_gViaYooF6_34Zr6O27zrcbWWx"
                  alt=""
                  className="third"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
