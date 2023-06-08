import React from "react";
import Image from "next/image";
import building from "../../public/assets/images/seller/building.svg";
import pass from "../../public/assets/images/seller/pass.svg";
import collab from "../../public/assets/images/seller/collab.svg";
import create from "../../public/assets/images/seller/create.svg";
import file from "../../public/assets/images/seller/file.svg";
import styles from "../../styles/advantage.module.css";
import notification from "../../public/assets/images/seller/notification.svg";

const Advantage = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-end  mb-10 px-4 md:mb-0">
        <h6 className=" text-[#6D5C41] md:text-4xl text-2xl md:leading-[60px] font-light md:mt-14 mt-[80px] md:text-left text-center ">
          {/* Advantages <br /> */}
          <span className="text-[#6D5C41] font-medium md:font-semibold text-2xl md:text-4xl">
            LynkTown advantages for Customers
          </span>
        </h6>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row py-2">
        {/* Images */}
        <div className={`md:w-[600px]  md:px-16 px-12 ${styles.advantageMain}`}>
          <div className={`${styles.advantageBG}`}>
            <Image
              src="../assets/images/advantage/advantage.svg"
              width="410"
              height="367"
              alt="hand"
              className=""
            />
          </div>
          <div className={`   ${styles.ladyImg}`}>
            <Image
              src="../assets/images/advantage/1.svg"
              width="627"
              height="687"
              alt="lady"
            />
          </div>
        </div>
        {/* Images end */}
        <div className="md:w-[680px]">
          <div className="py-10 md:py-5 flex flex-col md:flex-row gap-4">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px]   md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#FFF4E2] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={pass.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                1000s of new styles everyday from fashion designers across the
                country.
              </p>
            </div>
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px] md:w- md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={file.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[15px] leading-[20px] font-normal  pt-[14px] ">
                Buy exclusive and limited editions from well known and creative
                designers. Buy products from designers who worked for
                celebrities and for people like us
              </p>
            </div>
          </div>
          <div className="md:py-5 flex flex-col md:flex-row gap-4">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage}`}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={building.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Get your products stitched for your body type.
              </p>
            </div>
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage}`}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image
                  src={notification.src}
                  width="27"
                  height="27"
                  alt="hand"
                />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Buy any product you like/want from any social seller.
              </p>
            </div>
          </div>
          <div className="md:py-5 py-5 flex flex-col md:flex-row gap-4">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage}`}
            >
              <div className="flex justify-center bg-[#E0C1F4] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={collab.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Safe payment and shipment through our ESCROW model.
              </p>
            </div>

            <div
              className={`md:p-6 rounded-lg p-4 md:w-[317px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage}`}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={create.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Manage all your orders with LynkTown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
