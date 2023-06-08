import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { GiPlayButton } from "react-icons/gi";
import Image from "next/image";
const StudyCard = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#EDEDED]">
        <div className="container ">
          <div className="flex flex-wrap">
            <div className="mr-4">
              <div className="mr-4 w-[940px] md:w-[946px] bg-white bg-opacity-75 rounded-lg overflow-hidden relative ">
                <div className="bg-white">
                  <Image
                    src="/IMG-20230315-WA0003.jpg"
                    alt=""
                    srcSet=""
                    className="object-cover w-full p-2"
                    width={400}
                    height={200}
                    priority
                  />
                </div>
                <div className="px-5 py-5 ">
                  <h1 className="text-[30px]  md:text-[20px] font-medium	font-serif font-normal">
                    13 Essential Science Backe...
                  </h1>
                  <p className="text-[26px]  md:text-[20px] font-serif font-normal">
                    by Thomas Frank
                  </p>
                </div>
                <div className="flex justify-between items-center px-5 py-5">
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <p className="mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[20px]">
                        <AiFillHeart />
                      </p>
                      <p className="text-[30px]  md:text-[20px] ">32</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[20px]">
                        <GiPlayButton />
                      </p>
                      <p className="text-[30px]  md:text-[20px]">12</p>
                    </div>

                    <div className="flex gap-2">
                      <p className="mt-2  md:mt-1 lg:mt-1 text-[30px]  md:text-[20px]">
                        <IoMdShareAlt />
                      </p>
                      <p className="text-[30px]  md:text-[20px] font-serif font-normal">
                        Share
                      </p>
                    </div>
                  </div>

                  <div className=" w-[200px]  h-[50px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                    <span className=" text-[30px]  md:text-[20px] font-serif font-normal">
                      {" "}
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StudyCard;
