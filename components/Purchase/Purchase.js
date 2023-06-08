import React from "react";
import Image from "next/image";
import buyer from "../../public/assets/images/advantage/buyer.svg";
import business from "../../public/assets/images/advantage/business.svg";
import styles from "./purchase.module.css";

const Purchase = () => {
  return (
    <>
      <div className={`md:h-[700px] bg-[#EEECE7]  ${styles.purchaseSty}`}>
        <div className="container mx-auto">
          <h6 className=" text-[#6D5C41] md:text-[40px] text-[16px] md:leading-[60px]  font-semibold text-center py-10">
            <span>
              Why choose us <br />
            </span>
            <span className="text-[#1F1F1F]">
              Why purchase from sellers on LynkTown
            </span>
          </h6>

          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="flex justify-between  md:px-8 md:pt-16 md:pb-24 rounded-lg overflow-hidden text-center relative">
                  <p className="text-left md:w-[296px] w-full text-[14px] md:text-[18px] md:leading-[27px] font-normal">
                    Be a part of the economy growth of the Country
                  </p>
                  <Image
                    src="../assets/images/advantage/hand.svg"
                    width="65"
                    height="65"
                    alt="hand"
                  />
                </div>
                <div className="flex justify-between md:px-[50px md:px-8 pt-6 md:pt-16 md:pb-24 rounded-lg overflow-hidden text-center relative">
                  <p className="flex justify-center  md:w-[296px] text-[14px] md:text-[18px] md:leading-[27px] font-normal pt-4">
                    Be a concious buyer
                  </p>
                  <Image
                    src={buyer.src}
                    // src='../assets/images/advantage/hand.svg'
                    width="65"
                    height="65"
                    alt="hand"
                  />
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div
                  className={`flex md:h-[483p] px-8 pt- pb- rounded-lg overflow-hidden text-center ${styles.purchaseMain}`}
                >
                  <div className={`${styles.purchaseBG}`}>
                    <Image
                      src="../assets/images/advantage/purchase.svg"
                      width="493"
                      height="367"
                      alt="hand"
                    />
                  </div>
                  <div className={`${styles.purchaseLady}`}>
                    <Image
                      src="../assets/images/advantage/2.svg"
                      width="367"
                      height="493"
                      alt="hand"
                      // className="md:h-[422px] h-[265px] md:w-[410px] "
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="flex gap-4 pt-6 pb-6  md:pt-16 md:pb-16 rounded-lg overflow-hidden text-center relative">
                  <Image src={business.src} width="65" height="65" alt="hand" />
                  <p className="text-left md:w-[521px] text-[14px] md:text-[18px]  md:leading-[27px] font-normal">
                    Buy from small businesses who are creative & provide quality
                    products. Be a part of their business growth. Help India
                    Grow.
                  </p>
                </div>
                <div className="flex gap-4 md:pt-16 pb-10 rounded-lg overflow-hidden text-center relative">
                  <Image
                    src="../assets/images/advantage/products.svg"
                    width="65"
                    height="65"
                    alt="hand"
                  />
                  <p className="text-left flex items-center md:w-[296px]s text-[14px] md:text-[18px] md:leading-[27px] font-normal">
                    Buy sustainable products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
