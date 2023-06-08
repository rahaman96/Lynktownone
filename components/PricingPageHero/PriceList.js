import Link from "next/link";
import { useState } from "react";
import styled from "./pricing.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import success from "../../public/assets/images/pricing/success.svg";
import google from "../../public/assets/images/google.png";
import apple from "../../public/assets/images/apple.png";

export default function PriceList() {
  const [choose, setChoose] = useState(false);
  const [Secondchoose, setSecondChoose] = useState(false);
  const [Thirdchoose, setThirdChoose] = useState(false);
  const [Fourchoose, setFourChoose] = useState(false);
  const [open, setOpen] = useState(false);
  const [otpmodal, setOtpModal] = useState(false);
  const [nextmodal, setnextmodal] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onCloseNextModal = () => setnextmodal(false);

  const handleClick = () => {
    setChoose(true);
    setSecondChoose(false);
    setThirdChoose(false);
    setFourChoose(false);
  };
  const handleSecondClick = () => {
    setChoose(false);
    setSecondChoose(true);
    setThirdChoose(false);
    setFourChoose(false);
  };
  const handleThirdClick = () => {
    setChoose(false);
    setSecondChoose(false);
    setThirdChoose(true);
    setFourChoose(false);
  };
  const handleFourClick = () => {
    setChoose(false);
    setSecondChoose(false);
    setThirdChoose(false);
    setFourChoose(true);
  };
  const handleverify = (e) => {
    setOtpModal(true);
    setOpen(false);
  };
  return (
    <>
      <main>
        {/* SucceessFull Modal */}
        <Modal onClose={onCloseNextModal} open={nextmodal}>
          <div className="mt-6">
            <div className="flex justify-center my-6">
              <img
                src={success.src}
                alt=""
                className="w-[160px] h-[50px] md:w-[208px] md:h-[62px]"
              />
            </div>
            <h1 className="text-[#000000] md:text-[34px] md:leading-[50px] text-center font-medium ">
              You have successfully created your account with free basic plan
            </h1>
            <button
              className="mt-6 bg-[#6D5C41]  md:w-[221px] md:h-[50px] text-[#FFFFFF]  py-2 px-4 mx-auto items-center flex justify-center md:text-[20px] md:leading-[24px] font-normal rounded"
              onClick={() => setnextmodal(false)}
            >
              Ok
            </button>
            <div className="py-10 flex gap-4 text-center mx-auto justify-center items-center">
              <div className="text-[#6D5C41] md:text-[20px] md:leading-[24px] font-medium ">
                Download App
              </div>
              <div>
                <img
                  src={google.src}
                  alt=""
                  className="w-[140px] h-[40px] md:w-[208px] md:h-[62px]"
                />
              </div>
              <div>
                <img
                  src={apple.src}
                  alt=""
                  className="w-[140px] h-[40px]  md:w-[208px] md:h-[62px] "
                />
              </div>
            </div>
          </div>
        </Modal>
        {/* SucceessFull Modal */}

        {/* Otp Modal start */}
        {/* <Modal open={true}> */}
        {otpmodal && (
          <Modal open={otpmodal}>
            <div className={styled.otpMadal}>
              <h1 className="text-[#000000] md:text-[29px] md:leading-[44px] font-normal text-center ">
                OTP verification
              </h1>
              <div className={styled.inputcontainer}>
                <TextField
                  id="Enter-otp"
                  label="Enter otp"
                  variant="standard"
                />
              </div>
              <div className="py-10">
                <button
                  className="bg-[#6D5C41]  md:w-[221px] md:h-[50px] text-[#FFFFFF]  py-2 px-4 mx-auto items-center flex justify-center md:text-[20px] md:leading-[24px] font-normal rounded"
                  onClick={() => (setnextmodal(true), setOtpModal(false))}
                >
                  Verify
                </button>
              </div>
            </div>
          </Modal>
        )}

        {/* Otp Modal start */}

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          classNames={styled.modalContent}
          style={{ textAlign: "center" }}
        >
          <div className="py-6">
            <h2 className="text-center text-[#000000]">
              <span className=" md:text-[22px] md:leading-[44px] font-normal ">
                Create your account to start
              </span>
              <span className="text-[#6D5C41] md:text-[30px] md:leading-[51px] font-semibold ">
                {" "}
                your free trail for 1 month
              </span>
            </h2>
            <div className="py-2">
              <div className={styled.inputcontainer}>
                <TextField
                  id="Business-name"
                  label="Business name *"
                  variant="standard"
                  className="text-red-300"
                />
                <TextField
                  id="Email-id"
                  label="Email Id *"
                  variant="standard"
                />
              </div>

              <div className={styled.inputcontainer}>
                <TextField id="Phone-no" label="Phone no*" variant="standard" />
                <TextField
                  id="Instagram-link"
                  label="Instagram link*"
                  variant="standard"
                />
              </div>
            </div>
            <div className="py-10">
              <button
                className="bg-[#6D5C41]  md:w-[221px] md:h-[50px] text-[#FFFFFF]  py-2 px-4 mx-auto items-center flex justify-center md:text-[20px] md:leading-[24px] font-normal rounded"
                onClick={handleverify}
              >
                Verify
              </button>
            </div>
            <div className="text-[#000000] pb-4 text-center font-medium md:text-[22px] md:leadiing-[33px] ">
              You don’t have to pay now!
            </div>
          </div>
        </Modal>

        {/* otp Modal */}

        <div className="flex flex-row lg:flex-row min-h-screen bg-[#EEECE7] my-20 rounded-xl">
          {/* <!-- Sidebar --> */}
          <div className="flex-none w-[36%] lg:w-64 px-6 py-8 bg-[#948160] border-r">
            {/* <!-- Your sidebar content here --> */}
            <p className="mb-4 h-14 font-medium text-white flex justify-center items-center"></p>
            <p className="mb-4 h-14 text-base leading-5 font-bold text-white flex justify-center items-center">
              Create Lynks
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              Lynks Reach
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              Setup store
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              Notification
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center text-center items-center">
              Influencer collab
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center text-center items-center">
              Analytics and Insights
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              Platform commission
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex text-center justify-center items-center">
              Convenience charges (per sale)
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              On-demand marketing
            </p>
            <p className="mb-4 h-14 font-bold text-base leading-5 text-white flex justify-center items-center">
              Costing and offers
            </p>
          </div>

          {/* <!-- Main Content --> */}
          <div
            className={` w-[64%] flex-auto px-6 py-8 ${styled.responsiveui}`}
          >
            <div className="w-[900px] lg:w-[100%] flex  lg:grid-cols-4  gap-4">
              {/* <!-- Column 1 --> */}

              <div
                className={`w-[100%] p-6 bg-white shadow rounded-xl ${
                  choose ? styled.choose : ""
                }`}
              >
                <h3 className="text-[#6D5C41] font-bold text-3xl leading-9 mb-4 text-center">
                  Intro
                </h3>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  50 Lynks/month
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Lynk reach NA
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Up to 50 products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Notification NA
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  Influencer collab for up to 5 products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  Analytics and Insights NA
                </p>
                <p className="mb-4 h-14 font-bold text-[#6A5B40] flex justify-center items-center">
                  ZERO commission
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  7% + Taxes (per sale)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Up to 25% discount
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Free
                </p>
                <button
                  className={`text-[#6A5B40] font-bold border-2 py-2 px-4 rounded-full mx-auto block mt-4 ${
                    choose ? styled.buttonbg : ""
                  }`}
                  onClick={handleClick}
                >
                  {choose ? (
                    <span onClick={onOpenModal}>Next</span>
                  ) : (
                    <span>Choose</span>
                  )}
                </button>
                {/* <!-- Add more details or features here --> */}
              </div>

              {/* <!-- Column 2 --> */}
              <div
                className={`w-[100%] p-6 bg-white shadow rounded-xl ${
                  Secondchoose ? styled.choose : ""
                }`}
              >
                <h3 className="text-[#6D5C41] font-bold text-3xl leading-9 mb-4 text-center">
                  Basic
                </h3>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  500 Lynks/month
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  500 users/Lynk (25k views)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  upto 150 products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  Existing customer and followers
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Yes
                </p>
                <p className="mb-4 h-14 font-bold text-[#6A5B40] flex justify-center items-center">
                  ZERO commission
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  5% + Taxes (per sales)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  upto 20%
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] text-left flex justify-center items-center">
                  INR 999/per month
                  <br />
                  offer price: 699/per month (First Hundred)
                </p>
                <button
                  className={`text-[#6A5B40] font-bold border-2 py-2 px-4 rounded-full mx-auto block mt-4 ${
                    Secondchoose ? styled.buttonbg : ""
                  }`}
                  onClick={handleSecondClick}
                >
                  {Secondchoose ? (
                    <span onClick={onOpenModal}>Next</span>
                  ) : (
                    <span>Choose</span>
                  )}
                </button>
                {/* <!-- Add more details or features here --> */}
              </div>

              {/* <!-- Column 3 --> */}
              <div
                className={`w-[100%] p-6 bg-white shadow rounded-xl ${
                  Thirdchoose ? styled.choose : ""
                }`}
              >
                <h3 className="text-[#6D5C41] font-bold text-3xl leading-9 mb-4 text-center">
                  Pro
                </h3>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Up to 500 products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  Existing customer and followers LynkTown customers (Note* upto
                  5000)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Yes
                </p>
                <p className="mb-4 h-14 font-bold text-[#6A5B40] flex justify-center items-center">
                  ZERO commission
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  2% + Taxes (per sales)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  upto 15%
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  INR 2499/per month
                  <br />
                  offer price: 1999/per month (First Hundred)
                </p>
                <button
                  className={`text-[#6A5B40] font-bold border-2 py-2 px-4 rounded-full mx-auto block mt-4 ${
                    Thirdchoose ? styled.buttonbg : ""
                  }`}
                  onClick={handleThirdClick}
                >
                  {Thirdchoose ? (
                    <span onClick={onOpenModal}>Next</span>
                  ) : (
                    <span>Choose</span>
                  )}
                </button>
                {/* <!-- Add more details or features here --> */}
              </div>

              {/* <!-- Column 4 --> */}
              <div
                className={`w-[100%] p-6 bg-white shadow rounded-xl ${
                  Fourchoose ? styled.choose : ""
                }`}
              >
                <h3 className="text-[#6D5C41] font-bold text-3xl leading-9 mb-4 text-center">
                  Enterprise
                </h3>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  upto 500 products
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  Existing customer & followers LynkTown customers
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Unlimited
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  Yes
                </p>
                <p className="mb-4 h-14 font-bold text-[#6A5B40] flex justify-center items-center">
                  ZERO commission
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  1% + Taxes (per sales)
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center items-center">
                  upto 15%
                </p>
                <p className="mb-4 h-14 font-medium text-[#6A5B40] flex justify-center text-center items-center">
                  INR 3999/per month
                  <br />
                  offer price: 13599/per month (First Hundred)
                </p>

                <button
                  className={`text-[#6A5B40] font-bold border-2 py-2 px-4 rounded-full mx-auto block mt-4 ${
                    Fourchoose ? styled.buttonbg : ""
                  }`}
                  onClick={handleFourClick}
                >
                  {Fourchoose ? (
                    <span onClick={onOpenModal}>Next</span>
                  ) : (
                    <span>Choose</span>
                  )}
                </button>

                {/* <!-- Add more details or features here --> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
