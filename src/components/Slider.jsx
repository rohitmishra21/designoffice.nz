import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import "../swiper.css";
import gsap from "gsap";

const Slider = () => {
  const [currentslide, setCurrentSlide] = useState(0);
  const [showDiv, setShowDiv] = useState(null);
  const [back, setBack] = useState(true);
  const [backgroundChanger, setBackgroungChanger] = useState(true);

  const divContent = [
    {
      bgImg:
        "https://images.prismic.io/motionsickness/ZkGPb0FLKBtrWzUa_spouse.png?auto=format,compress?auto=compress,format",
      text:
        "We're uncomfortable with this bold change and need reassurance before moving forward.",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/ZkGPDkFLKBtrWzUW_Bitmap07.png?auto=compress,format",
      text: "What if we just told you what to do. In-person.",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/ZkGPNkFLKBtrWzUX_Bitmap01.png?auto=compress,format",
      text: "We never looked at the work.",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/ZkvnBCol0Zci9TRP_Bitmap15.png?auto=format,compress?auto=compress,format",
      text:
        "Prepare to get stuck in an endless feedback loop involving everyone from the CEO to the CEO’s cousin.",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/Zkvmmiol0Zci9TRL_Bitmap16.png?auto=format,compress?auto=compress,format",
      text:
        "We appreciate your effort, but we're about to suggest some significant changes that will most likely make you clench.",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/1e4c6a09-018c-4a3e-bee6-0d209b8d87a0_Bitmap03.png?auto=compress,format",
      text: "Can you hurry up and reply to my last email.",
    },
    {
      text: "It’s perfect first-go but I have some time to kill.",
      bgImg:
        "https://images.prismic.io/motionsickness/ZkvoJCol0Zci9TRf_Bitmap20.png?auto=format,compress?auto=compress,format",
    },
    {
      bgImg:
        "https://images.prismic.io/motionsickness/6c7d1ac5-5254-4f94-a4d5-f4e9b2d97203_Bitmap01.png?auto=compress,format",
      text: "Hurry up and make it quick.",
    },
  ];

  function slideHendler(swiper) {
    setCurrentSlide(swiper.realIndex);
  }

  function show() {
    setShowDiv(currentslide);
    setBack((prev) => !prev);
  }
  function move() {
    setShowDiv(currentslide);
    setBack(true);
  }

  function bgmover() {
    setBackgroungChanger((pr) => !pr);
  }

  useEffect(() => {
    if (backgroundChanger === false) {
      gsap.to(".smcircle", {
        x: "130%",
      });
    } else {
      gsap.to(".smcircle", {
        x: 0,
      });
    }
  }, [backgroundChanger]);

  return (
    <>
      <div className="relative w-full h-screen ">
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
        <div className="w-full h-screen absolute top-0 flex justify-center items-center z-20">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            onSlideChange={slideHendler}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper h-[70%] w-[80%] "
            style={{
              display: back ? "block" : "none",
              backgroundColor: backgroundChanger ? "#e5d4ba" : undefined, // Use backgroundColor for color
              backgroundImage: !backgroundChanger
                ?"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmGzcN-57sW1aQ-0dK8nuRPjpyTcrbS7q4RYxFHWU5ks5FnTXTVVlLw9M4LXmSFklcVI&usqp=CAU)"
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="gap-12 pointer-events-none">
              <h1 className="text-[2.8vw] leading-none capitalize px-5 py-5">
                design <br />
                translator
              </h1>
              <button
                className="px-[80px] py-[15px] z-30 bg-[#b0fb90] text-xl border border-black font-medium pointer-events-auto absolute top-[70%] left-1/2 -translate-x-1/2"
                onClick={show}
              >
                Translate
              </button>
              <div className="absolute right-3 bottom-5 flex items-center gap-4 pointer-events-auto">
                <h1 className="text-xl capitalize">client mode</h1>
                <div
                  className="h-10 w-20 z-20 bg-white border flex items-center border-black rounded-full"
                  onClick={bgmover}
                >
                  <div className="smcircle relative  h-8 w-8 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            <SwiperSlide className="">
              <div className="h-full flex justify-center items-center">
                <h1 className="text-[3vw]  leading-none tracking-tight ">
                  What if we design sprint face - to - face.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="h-full flex justify-center items-center">
                <h1 className="text-[3vw] leading-none tracking-tight text-center px-28">
                  Can you resend the link.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3.5vw]  leading-none tracking-tight text-center px-28">
                We need to run this by the team.
              </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                It's almost there.
              </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                There is some great thinking here.
              </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                Hey just wondering if you got my last email.
              </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                The il
                lustrated character's face looks a little smug .
              </h1>
              </div>

            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                Thank you in advance.
              </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  justify-center items-center">
            <div className="h-full flex justify-center items-center">
              <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
                we need to a younger <br /> audience without alineating our{" "}
                <br /> existing customer base.
              </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {showDiv === 0 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[0].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[0].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div
                    className=" h-10 w-20 bg-white border flex items-center  border-black rounded-full"
                    onClick={bgmover}
                  >
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 1 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[1].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[1].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 2 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[2].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[2].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 3 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[3].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[3].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 4 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[4].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[4].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 5 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[5].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[5].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 6 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[6].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[6].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 7 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[7].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[7].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv === 8 && (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="">
            <div className="w-full  absolute top-0 left-0   h-screen flex justify-center items-center  gap-7">
              <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
                <h1 className="text-[2.8vw] absolute leading-none capitalize px-5 py-5">
                  design <br />
                  translator
                </h1>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
                  <>
                    <div className="bg-[#b0fb90] w-[100%] h-[100%]  flex justify-center items-center  ">
                      <div
                        className="w-1/2 h-[70%] flex justify-center items-center  bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${divContent[8].bgImg})`,
                        }}
                      >
                        <h1 className="text-[3vw]  leading-none absolute text-center mx-52 ">
                          {divContent[8].text}
                        </h1>
                        <button
                          className="px-[120px] py-[12px] z-50 bg-black text-white capitalize  text-xl border border-black font-medium pointer-events-auto absolute top-[75%] left-1/2 -translate-x-1/2 "
                          onClick={move}
                        >
                          back
                        </button>
                      </div>
                    </div>
                  </>
                </div>

                <div className="absolute right-3 bottom-5 flex items-center gap-4">
                  <h1 className="text-xl capitalize">client mode</h1>
                  <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
                    <div className="h-8 w-8 bg-black  rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
