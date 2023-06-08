import { AiFillEye, AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <>
      <section className="w-full mb-28 mt-16">
        <div className="container mx-auto">
          <h1 className="text-[2rem] text-center tracking-wider text-[#857250]">
            BLOG POSTS
          </h1>
          <h2 className="text-center text-[3rem] mb-6">Our latest news.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post1.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Bills of Lading - draft
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Admin</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillEye />
                    </p>
                    <p className="text-[14px]"></p>
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post2.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Jane Doe</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillEye />
                    </p>
                    <p className="text-[14px]"></p>
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full md:w-[340px] lg:w-[300px] xl:w-[380px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
              <div className="bg-white p-2">
                <img
                  src="/post3.jpg"
                  alt=""
                  className="object-cover w-full h-48"
                />
              </div>

              <div className="px-2 h-[60px]">
                <h1 className="w-[300px] mr-[20px] text-[18px] font-medium">
                  Dust of the moon
                </h1>
                <p className="text-lg text-gray-400">
                  by <span className="font-bold">Admin</span>
                </p>
              </div>

              <div className="flex justify-between items-center px-5">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <p className="py-1">
                      <AiFillEye />
                    </p>
                    <p className="text-[14px]"></p>
                  </div>
                </div>

                <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                  <a href="#" className="text-sm">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="float-right m-6">
            <Link
              href="/blogs"
              target="_self"
              className="btn btn-style1 btn-style12 inline-block bg-[#857250] hover:bg-[#857250] text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <span>View all articles</span>
              <svg className="inline-block ml-2" width="11.4" height="9.2">
                <use xlinkHref="#arrow"></use>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
