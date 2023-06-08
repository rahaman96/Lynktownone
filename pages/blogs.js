import GoalSection from "../components/Blog/GoalSection";
import BodySection from "../components/Blog/BodySection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderSection from "../components/Blog/HeaderSection";
import { useState, useEffect } from "react";
import Modal from "../components/Blog/Modal";

export default function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reload, setReload] = useState(false);
  const modalHandler = () => {
    setIsOpen(true);
  };
  const linkHandler = () => {
    setReload(true);
  };
  useEffect(() => {
    var blog_view = localStorage.getItem("blog_view");
    console.log(blog_view, 123);
    if (blog_view > 6) {
      setTimeout(() => {
        if (!isOpen) setIsOpen(true);
      }, 3000);
      localStorage.setItem("show_subscriber", 1);
    }
  }, [isOpen]);

  const modal = () => {
    return (
      <Modal
        title={"Subscribe"}
        _isOpen={isOpen}
        content={
          <div
            style={{
              padding: 35,
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
              width: 400,
            }}
          >
            <input
              style={{
                borderRadius: 5,
                border: 1,
                borderStyle: "solid",
                borderColor: "black",
                marginBottom: 15,
                height: 40,
                padding: 10,
                fontSize: 12,
              }}
              onChange={(text) => setName(text.target.value)}
              placeholder="Enter Name"
            />
            <input
              style={{
                borderRadius: 5,
                border: 1,
                borderStyle: "solid",
                borderColor: "black",
                marginBottom: 15,
                height: 40,
                padding: 10,
                fontSize: 12,
              }}
              onChange={(text) => setEmail(text.target.value)}
              placeholder="Enter Email"
            />
            <input
              style={{
                borderRadius: 5,
                border: 1,
                borderStyle: "solid",
                borderColor: "black",
                height: 40,
                padding: 10,
                fontSize: 12,
              }}
              type="password"
              onChange={(text) => setPassword(text.target.value)}
              placeholder="Enter Password"
            />
            <p style={{ fontSize: 11, marginTop: 12 }}>
              Note: The password added here will be useful when accessing our
              website from other device/network, and the same shall be sent to
              your email and you can starmark the email for future reference.
            </p>
          </div>
        }
        onConfirm={() => {
          if (name && email && password) {
            fetch("https://api.cdcs.lesoft.io/api/subscribe", {
              method: "post",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                name,
                email,
                password,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.code == 1) {
                  setIsOpen(false);
                  openThank();
                  setIsSuccessOpen(true);
                  localStorage.setItem("show_subscriber", 0);
                  localStorage.setItem("blog_view", 0);

                  // const Razorpay = require('razorpay');

                  // var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

                  // var options = {
                  //   amount: 50000,  // amount in the smallest currency unit
                  //   currency: "INR",
                  //   receipt: "order_rcptid_11"
                  // };
                  // instance.orders.create(options, function(err, order) {
                  //   console.log(order);
                  // });
                }

                // after steps

                // setIsOpen(false);
                // openThank();
                // setIsSuccessOpen(true);
                // localStorage.setItem("show_subscriber", 0);
                // localStorage.setItem("blog_view", 0);
              });
          } else {
            setIsErrorOpen(true);
            setIsOpen(false);
            openError(!name ? "Email is required" : "Password is required");
          }
        }}
        onDiscard={() => {
          setIsOpen(false);
          document.documentElement.style.overflow = "auto";
        }}
        buttons={[
          {
            role: "Cancel Q",
            toClose: true,
            classes:
              "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
            label: "Cancel",
          },
          {
            role: "confirm",
            toClose: false,
            classes:
              "bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-white",
            label: "Confirm",
          },
        ]}
      ></Modal>
    );
  };
  const openThank = () => {
    return (
      <Modal
        title={"Thank You"}
        buttons={[
          {
            role: "Cancel",
            toClose: true,
            classes:
              "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
            label: "Cancel",
          },
        ]}
        _isOpen={isSuccessOpen}
        content={
          <p style={{ padding: 25 }}>Thank you very much for subscription.</p>
        }
      ></Modal>
    );
  };
  const openError = (error) => {
    return (
      <Modal
        title={"Try again :'("}
        _isOpen={isErrorOpen}
        buttons={[
          {
            role: "Close",
            toClose: true,
            classes:
              "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
            label: "Close",
          },
        ]}
        content={<p style={{ padding: 25 }}>Some information was missing</p>}
      ></Modal>
    );
  };
  return (
    <div className=" mr-4 md:ml-0 md:mr-0">
      {reload ? (
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: 10000,
            backgroundColor: "#ffffff91",
          }}
        >
          <img
            style={{ height: 300 }}
            src="https://api.cdcs.lesoft.io/public/blogs/output-onlinegiftools.gif"
          />
        </div>
      ) : (
        <p></p>
      )}
      {isOpen ? modal() : <p></p>}
      {isSuccessOpen ? openThank() : ""}
      {isErrorOpen ? openError() : ""}
      <div
        style={{ overflow: "hidden" }}
        className="bg-[#EDEDED] md:py-10 w-[410px] h-[450px] md:h-[550px] lg:w-full md:w-full"
      >
        <HeaderSection />
        {/* <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          useKeyboardArrows
        >
          <HeroSection />
          <VirtualSection />
          <GoalSection />
        </Carousel> */}
        {/* <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '50%' }}>
            <button> Hello world </button>
            </div>
            <div style={{ width: '50%' }}>
              <img src="6269883.jpg" />
            </div>
          </div> */}
        <GoalSection />
      </div>
      <BodySection modalHandler={modalHandler} linkHandler={linkHandler} />
    </div>
  );
}
