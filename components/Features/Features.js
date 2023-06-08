import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Measurement from "./Measurement";
import Alteration from "./Alteration";
import Shipping from "./Shipping";
import Payment from "./Payment";
import SingleLink from "./SingleLink";
import ManageOrders from "./ManageOrders";
import Exchange from "./Exchange";

const Features = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { name: "Single link", value: "singleLink" },
    { name: "Measurement", value: "measurement" },
    { name: "Shipping", value: "shippingAndTracking" },
    { name: "Payment", value: "payment" },
    { name: "Manage orders", value: "manageOrders" },
    { name: "Exchange", value: "exchange" },
    { name: "Alterations", value: "alterations" },
  ];

  const [currentTab, setCurrentTab] = React.useState("singleLink");

  return (
    <section className="container mx-auto my-18 md:my-24    ">
      <div className="w-full  pt-12 md:py-10  rounded-[38px] md:border-primaryColor  md:border-[3px]  ">
        <h1 className="text-2xl md:text-4xl lg:text-[40px] text-primaryColor text-center font-medium">
          Our intuitive features
        </h1>
        <header className="pt-10 pb-10 lg:pb-0 mx-auto flex justify-center text-center Swiper--header">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              // '& .MuiTabs-scrollButtons': {
              //   backgroundColor: '#6A5B40',
              //   borderRadius: '50%',
              //   width: '35px',
              //   height: '35px',
              // },
              "& .MuiTabs-scroller": {
                "& .MuiTabs-flexContainer": {
                  gap: "1.2rem",
                  "& button": {
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3B3B3B",
                    textTransform: "capitalize",
                  },
                  "& button.Mui-selected": {
                    color: "#6A5B40",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#6A5B40",
                },
              },
            }}
          >
            {tabs.map((tab) => {
              return (
                <Tab
                  key={tab.name}
                  label={tab.name}
                  onClick={() => setCurrentTab(tab.value)}
                />
              );
            })}
          </Tabs>
        </header>
        {/* <header className='py-10 mx-auto text-center Swiper--header'>
          <Swiper
            slidesPerView={2}
            breakpoints={{
              450: {
                slidesPerView: 3.2,
              },
              700: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5.2,
              },
              1380: {
                slidesPerView: 6.5,
              },

              1540: {
                slidesPerView: 8,
              },
            }}
            className='px-5 md:px-10'
          >
            {tabs.map(tab => {
              return (
                <SwiperSlide key={tab.value}>
                  <button
                    className={`${
                      currentTab === tab.value
                        ? 'border-b-4 border-primaryColor'
                        : ''
                    } ${tab.value}-activeTab  py-4 `}
                    onClick={() => setCurrentTab(tab.value)}
                  >
                    {tab.name}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </header> */}
        {/* <div className='max-w-[80%] mx-auto'>{component}</div> */}
        <div className="lg:max-w-[80%] px-4 mx-auto relative h-[900px] lg:h-[500px] xl:h-[560px]    ">
          <div className="absolute  top-0">
            <SingleLink currentTab={currentTab} />
          </div>
          <div className="absolute top-0">
            <Measurement currentTab={currentTab} />
          </div>
          <div className="absolute top-0">
            <Alteration currentTab={currentTab} />
          </div>

          <div className="absolute top-0">
            <Shipping currentTab={currentTab} />
          </div>

          <div className="absolute top-0">
            <Payment currentTab={currentTab} />
          </div>
          <div className="absolute top-0">
            <ManageOrders currentTab={currentTab} />
          </div>

          <div className="absolute top-0">
            <Exchange currentTab={currentTab} />
          </div>

          {/* 
            {currentTab === 'alterations' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Alteration />
              </motion.div>
            )} */}
          {/* <AnimatePresence>
            {currentTab === 'shippingAndTracking' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ y: 0 }}
              >
                <Shipping />
              </motion.div>
            )}
          </AnimatePresence> */}
        </div>
      </div>
    </section>
  );
};

export default Features;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
