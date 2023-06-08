import React from "react";
import Image from "next/image";
import collab from "../../public/assets/images/seller/collab.svg";
import create from "../../public/assets/images/seller/create.svg";
import building from "../../public/assets/images/seller/building.svg";
import pass from "../../public/assets/images/seller/pass.svg";
import file from "../../public/assets/images/seller/file.svg";
import reach from "../../public/assets/images/seller/reach.svg";
import notification from "../../public/assets/images/seller/notification.svg";
import styles from "../../styles/advantage.module.css";
import Link from "next/link";

const Seller = () => {
  return (
    <div>
      <div className="md:px-[72px]">
        <h6 className=" text-[#6D5C41] text-2xl text-center md:text-left md:text-[40px] md:leading-[60px] font-light md:w-[720px] mt-[46px] ">
          {/* Advantages <br /> */}
          <span className="text-[#6D5C41] font-medium md:font-semibold text-2xl md:text-[38px]">
            LynkTown advantages for Sellers
          </span>
        </h6>
      </div>
      <div className="container flex flex-col-reverse md:flex-row  justify-between mx-auto">
        <div className="md:w-[796px] md:px-10">
          <div className="py-5 flex flex-col md:flex-row gap-4 ">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7]   cursor-pointer ${styles.advantage}`}
            >
              <div className="flex justify-center bg-[#FFF4E2] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={pass.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal pt-[22px] ">
                Manage enquiries and sell products on social platforms at ZERO
                comission
              </p>
            </div>
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={file.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[20px] font-normal  pt-[14px] ">
                Get payments, ship products, get customers measurements, manage
                alteration, exchange & return requests.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7] cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#E7FBF9] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={building.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000]  text-[16px] leading-[24px] font-normal pt-[22px] ">
                Reach new customers on LynkTown to sell your products
              </p>
            </div>
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7]  cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#C8C4E9] w-[47px] h-[47px] rounded-[6px] ">
                <Image
                  src={notification.src}
                  width="27"
                  height="27"
                  alt="hand"
                />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal pt-[22px] ">
                Notify your existing and new customers about your new arrivals.
              </p>
            </div>
          </div>
          <div className="py-5 flex flex-col md:flex-row gap-4">
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7] cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#E0C1F4] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={collab.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000]  text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Collab with influencers to increase sales.
              </p>
            </div>
            <div
              className={`md:p-6 rounded-lg p-4 md:w-[341px] md:h-[191px] bg-[#EEECE7] cursor-pointer ${styles.advantage} `}
            >
              <div className="flex justify-center bg-[#FDE0F6] w-[47px] h-[47px] rounded-[6px] ">
                <Image src={create.src} width="27" height="27" alt="hand" />
              </div>
              <p className="text-[#000000] text-[16px] leading-[24px] font-normal  pt-[22px] ">
                Create an ecommerce store for free.
              </p>
            </div>
          </div>
        </div>

        {/* Seller Image */}

        <div
          className={`containe   mx-auto mt-10 md:mt- mb-8 max-w-[480px]  ${styles.Seller}`}
        >
          <img
            src="../assets/images/advantage/sellerbg.svg"
            alt="hand"
            className={`w-[260px] md:w-[330px] md:h-auto max-w-full md:max-w-[410px] object-cover ${styles.sellerBgImg}`}
          />
          <div className=" bottom-[-252px] md:bottom-[-78px] transform -translate-y-1/2 right-14 md:right-32">
            <img
              src="../assets/images/advantage/person1.svg"
              alt="person"
              className={`w-4/5 md:w-[380px] h-[420px] mx-auto ${styles.personImg}`}
            />
          </div>
        </div>
      </div>

      {/* Learn More */}
      <div className="flex gap-4 px-2 md:px-10 my-8 ml-8">
        <div>
          <Link href="/vendor">
            <button className="bg-[#6A5B40] md:w-[208px] w-[160px] text-center justify-center mx-auto  text-[#FFFFFF] font-medium text-[12px] md:text-[18px] py-2 px-4 rounded inline-flex items-center">
              <span>Learn more</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seller;
