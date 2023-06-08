import React, { useEffect, useRef, useState } from 'react';
import gsap, { Bounce, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/manageBusiness/1.png';
import step2 from '/public/assets/images/manageBusiness/2.png';
import step3 from '/public/assets/images/manageBusiness/3.png';
import Tick from './Tick';
import { IconButton, useMediaQuery } from '@mui/material';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import ManageBusinessMobile from './ManageBusinessMobile';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const ManageBusiness = () => {
  const scrollTl = gsap.timeline({
    defaults: {
      ease: Power3.easeIn,
    },
  });
  const largeScreen = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    gsap.set('.step_1 svg .circle', {
      fill: '#3AC267',
      stroke: '#3AC267',
    });
    gsap.set('.step_1 svg .tick', {
      fill: '#fff',
    });

    // scrollTl.to(
    //   '.progressLine',

    //   {
    //     height: '100%',
    //     duration: 20,
    //   }
    // );
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Create multiple product links',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 2,
      title: 'Manage orders with ease',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 3,
      title: 'Ship & track all your orders at one place',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ];

  const [clicked, setClicked] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    const progress = document.querySelector('#progressBarManage');
    let value = 0;
    if (clicked[2]) {
      value = 0.8;
    }
    if (clicked[3]) {
      value = 1.5;
    }

    if (progress) progress.style.height = value * 120 + 'px';

    setHeight(height => height * 120);
  }, [clicked]);

  const variantsHeight = {
    show: {
      height: '60px',
    },
    hide: {
      height: '36px',
    },
  };
  const variantsText = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  const [height, setHeight] = useState(0);

  const [manualClick, setManualClick] = useState(false);

  const [running, setRunning] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-200px 0px',
    once: true,
  });

  // useEffect(() => {
  //   if (manualClick || largeScreen || !isInView) return setRunning(false);
  //   const progressBar = document.querySelector('#progressBarManage');
  //   const id = setInterval(frame, 60);
  //   // let height = 0;

  //   function frame() {
  //     if (manualClick || !progressBar) return;

  //     if (height >= 170) {
  //       clearInterval(id);
  //       setRunning(false);
  //     } else {
  //       setRunning(true);
  //       height++;
  //       progressBar.style.height = height + 'px';
  //       if (height === 80) {
  //         setClicked(prev => ({
  //           ...prev,
  //           2: true,
  //         }));
  //       }
  //       if (height === 160) {
  //         setClicked(prev => ({
  //           ...prev,
  //           3: true,
  //         }));
  //       }
  //     }
  //   }
  // }, [manualClick, largeScreen, isInView]);

  const [currentImg, setCurrentImage] = useState(1);

  useEffect(() => {
    if (currentImg === 4) {
      setCurrentImage(1);
      setClicked(prev => ({
        1: true,
        2: false,
        3: false,
      }));
    }
    if (currentImg === 0) {
      setCurrentImage(3);
      setClicked(prev => ({
        1: true,
        2: true,
        3: true,
      }));
    }
  }, [currentImg]);

  const nextImg = () => {
    if (currentImg === 4) {
      setClicked(prev => ({
        1: true,
        2: false,
        3: false,
      }));
      setCurrentImage(1);
      return;
    }

    setCurrentImage(currentImg + 1);
    setClicked(prev => ({
      ...prev,
      [currentImg + 1]: true,
    }));
  };
  const prevImg = () => {
    if (currentImg === 0) {
      setCurrentImage(3);
    }
    setCurrentImage(currentImg - 1);
    setClicked(prev => ({
      ...prev,
      [currentImg]: !clicked[currentImg],
    }));
  };

  return (
    <>
      {largeScreen ? (
        <ManageBusinessMobile />
      ) : (
        <div ref={ref} className='wrapper relative pt-36  pb-28 px-4'>
          <div className='selling-steps xl:container   mx-auto h-full   '>
            <div className='flex lg:grid-cols-2  item-container items-center justify-center  '>
              <div className='flex-[1.5] xl:flex-1  ml-20 '>
                <h1 className='text-[40px] text-primaryColor font-medium mb-24  '>
                  Manage your business at <br /> your finger tips
                </h1>
                <div className='relative  flex flex-col gap-4 h-full mt-10'>
                  <div
                    className='w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]'
                    style={{
                      height: `calc(100% - 35px)`,
                    }}
                  ></div>
                  <div
                    id='progressBarManage'
                    className='w-[2px] progressLine transition-all   bg-[#6A5B40] absolute left-3 z-[-1]'
                  ></div>

                  {steps.map(step => {
                    const { id, description, title } = step;
                    return (
                      <motion.div
                        key={id}
                        variants={variantsHeight}
                        animate={clicked[id] ? 'show' : 'hide'}
                        // className={`flex gap-5 step_${id}  ${
                        //   id !== 1 ? 'h-[28px]' : 'h-[140px]'
                        // } transition-all`}
                        className={`flex gap-5 step_${id} !text-right `}
                        // style={{
                        //   // height: clicked[id] ? '100%' : '20px',
                        //   cursor:
                        //     clicked[id - 1] && !clicked[id + 1] && !running
                        //       ? 'pointer'
                        //       : '',
                        // }}
                        // onClick={e => {
                        //   if (id === 1) return;
                        //   if (running) return;

                        //   if (!clicked[id - 1]) return;
                        //   if (clicked[id + 1]) return;

                        //   setManualClick(true);
                        //   setCurrentImage(id);

                        //   setClicked(prev => ({
                        //     ...prev,
                        //     [id]: !prev[id],
                        //   }));
                        // }}
                      >
                        <div>
                          <Tick fill={clicked[id] && true} />
                        </div>
                        <div>
                          <h1 className='text-xl opacity-80'>{title}</h1>
                          {/* <motion.p
                            variants={variantsText}
                            animate={clicked[id] ? 'show' : 'hide'}
                            // className={`my-2 text-[#757575]  ${
                            //   id !== 1 ? 'opacity-0' : 'opacity-100'
                            // }`}
                            className={`my-2 text-[#757575]`}
                            // style={{
                            //   opacity: clicked[id] ? '100%' : '0',
                            // }}
                          >
                            {description}
                          </motion.p> */}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className='flex-1 ml-[-50px] justify-end xl:justify-center flex '>
                <div className='relative'>
                  <svg
                    className='w-[400px] h-[400px] xl:w-[474px] xl:h-[474px]'
                    viewBox='0 0 474 474'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='237'
                      cy='237'
                      r='237'
                      fill='url(#paint0_linear_930_434)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_930_434'
                        x1='75.4091'
                        y1='195.705'
                        x2='237'
                        y2='474'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#857250' />
                        <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className='absolute top-2/4 left-[-10%] z-10 '>
                    <IconButton onClick={prevImg}>
                      <MdOutlineArrowBackIos className='text-3xl' />
                    </IconButton>
                  </div>
                  <div className='absolute top-2/4 right-[-10%] z-10 '>
                    <IconButton onClick={nextImg}>
                      <MdArrowForwardIos className='text-3xl' />
                    </IconButton>
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[1] && !clicked[2] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step1.src}
                          alt=''
                          className='h-full w-full  step_img--1 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[2] && !clicked[3] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step2.src}
                          alt=''
                          className='h-full w-full  step_img--2 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[3] && !clicked[4] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step3.src}
                          alt=''
                          className='h-full w-full  step_img--1 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageBusiness;
