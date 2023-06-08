import React from "react";
import styles from "./join.module.css";

const Join = () => {
  return (
    <div
      className={`h-[380px] bg-[#EEECE7] rounded-[29px]  md:w-[1207px] ${styles.joinMain}`}
    >
      <div className="  text-center  flex justify-center mx-auto px-10 py-10">
        <p className="md:w-[907px] w-full text-[14px] text-[#000000] md:text-[41px] font-bold md:leading-[62px] font-sans">
          Join our email list, unlock the Secrets of <br /> Business growth!
        </p>
      </div>

      {/* <div className="flex justify-center gap-4 mb-10">
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-[14px] md:mt-2 w-[20px] h-[20px] md:h-[30px] md:w-[30px] appearance-none rounded-full border-2 border-solid border-neutral-300 after:rounded-full checked:border-[#6D5C41] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:md:h-[1.2rem] checked:after:h-[0.6rem] checked:after:md:w-[1.2rem] checked:after:w-[0.6rem] checked:after:border-[#6D5C41] checked:after:bg-[#6D5C41] checked:after:[transform:translate(-50%,-50%)]"
            type="radio"
            name="flexRadioDefault"
            id="radioDefault01"
          />
          <label
            className="mt-p inline-block pl-[0.15rem] hover:cursor-pointer text-[#000000] text-[20px] md:text-[30px] leading-[46px] font-medium"
            htmlFor="radioDefault01"
          >
            Vendor
          </label>
        </div>
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1  mt-[14px] md:mt-2 w-[20px] h-[20px] md:h-[30px] md:w-[30px] appearance-none rounded-full border-2 border-solid border-neutral-300 after:rounded-full checked:border-[#6D5C41] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:md:h-[1.2rem] checked:after:h-[0.6rem] checked:after:md:w-[1.2rem] checked:after:w-[0.6rem] checked:after:border-[#6D5C41] checked:after:bg-[#6D5C41] checked:after:[transform:translate(-50%,-50%)]"
            type="radio"
            name="flexRadioDefault"
            id="radioDefault01"
          />
          <label
            className="mt-p inline-block pl-[0.15rem] hover:cursor-pointer text-[#000000] text-[20px] md:text-[30px] leading-[46px] font-medium "
            htmlFor="radioDefault01"
          >
            Customer
          </label>
        </div>
      </div> */}

      <div>
        <div
          className="relative mb-3 flex w-full md:w-[944px] justify-center mx-auto px-4 md:h-[50px]"
          data-te-input-wrapper-init
        >
          <input
            type="text"
            required
            className="peer min-h-[auto] w-full rounded border-0 bg-[#FFFFFF] px-3 py-[0.32rem] leading-[1.6] outline-none"
            id="exampleFormControlInput1"
            // placeholder="Enter email id"
          />
          <label
            htmlFor="exampleFormControlInput1"
            className="items-center pointer-events-none absolute left-6 top-1 md:left-8 md:top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration- peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] pee"
          >
            Enter email id
          </label>

          <button className="bg-[#6A5B40] w-[180px]  md:w-[287px] text-[#FFFFFF] font-medium text-[18px] py-2 px-4 rounded inline-flex  justify-center items-center">
            <span>Join now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
