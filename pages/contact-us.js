import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Layout from "../components/Layout/Layout";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import TextError from "../components/Form/TextError";
import Input from "../components/Form/Input";
import contact from "/public/assets/images/contact.png";
import Loading from "../components/Loading";

const ContactUs = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),

    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://formsubmit.co/ajax/lynktown@gmail.com",
        {
          ...values,
        }
      );

      // if (res.data.success === 'true') {
      setLoading(false);
      router.push("/thankyou");
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Form submission failed. Please try again later.");
    }
  };
  return (
    <Layout>
      {loading && <Loading />}
      <div className=" pb-24 relative ">
        <header className="bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]">
          <h1 className="font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center">
            Contact Us
          </h1>
        </header>
        <div className="px-4 mt-[-120px]">
          <div
            className="w-full bg-white rounded-[10px]  max-w-[950px] mx-auto px-4 py-8 md:p-8 lg:p-10 xl:p-16"
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <h1 className="border-b border-primaryColor text-2xl text-primaryColor w-fit text-center mx-auto">
              Get In Touch
            </h1>

            <div className="flex justify-center md:items-center flex-col w-full md:flex-row mt-10 gap-9 md:gap-4  ">
              <div className="flex-[0.7] mx-auto ">
                <img
                  src={contact.src}
                  alt=""
                  className="w-[120px] h-[272.14px] sm:w-auto sm:h-auto "
                />
              </div>
              <div className="flex-1 ">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form className="md:flex-1">
                        <h1 className="mb-7 text-xl">Leave us a message</h1>
                        <div className="flex flex-col gap-6 w-full">
                          <div className="w-full relative">
                            <Input
                              name="name"
                              type="text"
                              placeholder="Enter your name"
                              label="Your Name"
                            />
                          </div>
                          <div className="flex gap-5 flex-col">
                            <div className="w-full">
                              <Input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Your email"
                                label="Your Email Address"
                              />
                            </div>
                            <div className="w-full">
                              <Input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Phone number"
                                label="Your Phone Number"
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <Input
                              id="message"
                              name="message"
                              placeholder="Tell us about yourself"
                              label="Your Message"
                              multiline
                              rows={4}
                              maxRows={4}
                            />
                          </div>
                        </div>
                        <div className="mt-6 w-full">
                          <button
                            type="submit"
                            className=" flex w-full text-center justify-center gap-2 items-center bg-primaryColor p-4 h-[50px] rounded-[12px] text-white"
                          >
                            Send{" "}
                          </button>
                        </div>
                        <input
                          type="hidden"
                          name="_next"
                          value="https://dentotabs.vercel.app/thankyou"
                        />
                        <input type="hidden" name="_captcha" value="false" />
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
