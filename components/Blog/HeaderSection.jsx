import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(`Submitted: ${name} ${email}`);
    e.target.reset();
    closeModal();
  };

  return (
    <>
      <div className="px-4">
        <nav className="flex justify-between items-start">
          <div className="flex gap- items-center">
            <div className="ml-10 mt-3 md:ml-12 w-[120px] h-[77px] md:h-[82px] md:w-[190px] md:-mt-[23px]">
              <Link href="/">
                <Image
                  src="/Link town logo.svg"
                  alt=""
                  srcSet=""
                  width={190}
                  height={82}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="">
            <div>
              <button
                className="m-3 md:m-0 md:mr-20  md:w-48 bg-[#857250] hover:bg-[#857250] text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
              >
                Subscribe
              </button>

              {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <div className="bg-white p-8 rounded shadow-lg">
                    <h2 className="text-center text-2xl font-bold mb-4">
                      Subscribe
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="border border-gray-400 p-2 w-full"
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="border border-gray-400 p-2 w-full"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="bg-[#857250] hover:bg-[#857250] text-white font-bold py-2 px-4 rounded mr-2"
                          type="submit"
                        >
                          Subscribe
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default HeaderSection;
