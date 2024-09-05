// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import "swiper/css/navigation";
// import "../swiper.css";
// const Third = (props) => {
//   return (
//     <>
 
//     <div className="relative w-full h-screen">
//     <div className=" bg-[#ededed] w-full h-screen grid grid-cols-6 grid-rows-3 gap-3 px-3 py-3">
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative flex justify-between "></div>

//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>

//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//         <div className="border border-dotted z-10 border-black relative "></div>
//       </div>
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         loop={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper bg-[#e5d4ba] absolute top-[50%] z-50 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[80%] h-[70%] "
//       >
//         <div className="absolute inset-0   gap-12 pointer-events-none">
//           <h1 className="text-[2.8vw] leading-none capitalize px-5 py-5"  >
//             design <br />
//             translator
//           </h1>
//           <button className="px-[80px] py-[15px] z-50 bg-[#b0fb90] text-xl border border-black font-medium pointer-events-auto absolute top-[70%] left-1/2 -translate-x-1/2 " onClick={props.show}>
//             Translate
//           </button>
//           <div className="absolute right-3 bottom-5 flex items-center gap-4 pointer-events-auto">
//             <h1 className="text-xl capitalize">client mode</h1>
//             <div className="h-10 w-20 bg-white border flex items-center border-black rounded-full">
//               <div className="h-8 w-8 bg-black rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
            
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             What if we design sprint face - to - face.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             Can you resend the link.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3.5vw]  leading-none tracking-tight text-center px-28">
//             We need to run this by the team.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             It's almost there.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             There is some great thinking here.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             Hey just wondering if you got my last email.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             The illustrated character's face looks a little smug .
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             Thank you in advance.
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide className="flex  justify-center items-center">
//           <h1 className="text-[3vw]  leading-none tracking-tight text-center px-28">
//             we need to a younger <br /> audience without alineating our <br />{" "}
//             existing customer base.
//           </h1>
//         </SwiperSlide>
//       </Swiper>

//       {/* <div className="w-full top-0 left-0  absolute  h-screen flex justify-center items-center  gap-7">
//       <div className="w-[80%] z-20 h-[70%] bg-[#e5d4ba] relative">
//         <div className=" w-full h-full flex flex-col justify-center items-center gap-12">
//           <h1 className="text-[3vw] leading-none tracking-tight text-center px-28">
//             Designers and clients dont't always speak the same language. Our
//             property translator insures optimal synergy between creatives and
//             corporates.{" "}
//           </h1>
//           <button className="px-[80px] py-[15px]  bg-[#b0fb90] text-xl border border-black font-medium">
//             Launch Translator
//           </button>
//         </div>

//         <div className="absolute right-3 bottom-5 flex items-center gap-4">
//           <h1 className="text-xl capitalize">client mode</h1>
//           <div className=" h-10 w-20 bg-white border flex items-center border-black rounded-full">
//             <div className="h-8 w-8 bg-black  rounded-full "></div>
//           </div>
//         </div>
//       </div>
//     </div> */}
//     </div>
//   </>
//   )
// }

// export default Third