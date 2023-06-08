import React, { useState } from "react";
import person from "/public/assets/images/person.png";
import { Chart, Facebook, Instagram, WhatsApp } from "./Icons";
import Image from "next/image";
import DemoVideo from "../DemoVideo";
import google from "/public/assets/images/google.png";
import apple from "/public/assets/images/apple.png";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((openModal) => !openModal);
  };
  return (
    <section className="lg:h-[655px]  pt-5  sm:pt-16 lg:py-4   bg-primaryColor text-white relative">
      <DemoVideo open={openModal} toggleModal={toggleModal} />
      <div className="container mx-auto grid lg:grid-cols-2 items-center h-full px-4">
        <div className="z-10">
          <h1 className=" md:text-4xl text-3xl lg:text-5xl xl:text-[56px]  text-left leading-normal lg:leading-[70.2px] font-medium lg:max-w-[585px]">
            Grow your business & sell products with ease
          </h1>

          <p className="my-3 sm:my-8 mx-auto text-left">
            LynkTown is trusted by 5000+ fashion designers, artists &{" "}
            <br className="hidden md:block" />
            business owners.
          </p>
        </div>

        <div className="justify-self-center lg:justify-self-end mt-20 lg:mt-14    md:scale-100">
          <div className="relative ">
            <svg
              // className='w-[279.63px] h-[340px] sm:w-[350px] sm:h-[400px] md:w-[495px] md:h-[495px]'
              className="w-full h-full sm:w-[350px] sm:h-[400px] md:w-[495px] md:h-[495px]"
              viewBox="0 0 495 495"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={247.5} cy={247.5} r={247.5} fill="#857250" />
              <circle cx={247.5} cy={247.5} r={195.611} fill="#9D8E73" />
              <circle cx={247.499} cy={247.5} r={150.312} fill="#6A5B40" />
            </svg>
            <div className="!absolute    !top-[-40px] sm:!top-[-15px] md:!top-[-86px] lg:!top-[-35px] !left-[-10px]">
              <img
                src={person.src}
                alt=""
                className="sm:!h-full sm:w-auto  h-[340px] "
              />
            </div>
            <div className="absolute top-[45%] right-[-5%]">
              <Chart />
            </div>
            <div className="absolute top-[15%] right-0">
              <Facebook />
            </div>
            <div className="absolute bottom-10 left-[30%]">
              <WhatsApp />
            </div>
            <div className="absolute top-[25%] left-0">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0  bottom-16 hidden lg:block">
        <svg
          width="129"
          height="228"
          viewBox="0 0 129 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            width="57"
            height="57"
            fill="#9D8E73"
            fillOpacity="0.26"
          />
          <rect
            x="-40"
            y="57"
            width="57"
            height="57"
            fill="#9D8E73"
            fillOpacity="0.26"
          />
          <rect
            x="72"
            y="57"
            width="57"
            height="57"
            fill="#9D8E73"
            fillOpacity="0.26"
          />
          <rect
            x="15"
            y="114"
            width="57"
            height="57"
            fill="#9D8E73"
            fillOpacity="0.26"
          />
          <rect
            x="72"
            y="171"
            width="57"
            height="57"
            fill="#9D8E73"
            fillOpacity="0.26"
          />
        </svg>
      </div>
      <div className="md:hidden absolute bottom-5 right-[2%]">
        <button
          className="bg-white text-primaryColor flex font-medium items-center gap-1 text-[8px] sm:text-[11px]  p-1.5 sm:p-2 rounded-[5.52px]"
          onClick={toggleModal}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            className="w-[13.8px] h-[13.8px] sm:w-[20px] sm:h-[20px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#6A5B40" />
            <path
              d="M20.4238 14.134C21.0905 14.5189 21.0905 15.4811 20.4238 15.866L13.0392 20.1295C12.3725 20.5144 11.5392 20.0333 11.5392 19.2635L11.5392 10.7365C11.5392 9.96667 12.3725 9.48555 13.0392 9.87045L20.4238 14.134Z"
              fill="white"
            />
          </svg>{" "}
          Watch Video
        </button>
      </div>
    </section>
  );
};

export default Hero;
