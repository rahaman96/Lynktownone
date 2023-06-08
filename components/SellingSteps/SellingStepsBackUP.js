import React, { useEffect, useState } from 'react';
import gsap, { Bounce, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/sellingSteps/1.png';
import step2 from '/public/assets/images/sellingSteps/2.png';
import step3 from '/public/assets/images/sellingSteps/3.png';
import step4 from '/public/assets/images/sellingSteps/4.png';
import Tick from './Tick';
import { useMediaQuery } from '@mui/material';
import SellingStepMobile from './SellingStepMobile';

gsap.registerPlugin(ScrollTrigger);

const SellingSteps = () => {
  const scrollTl = gsap.timeline({});

  const animateFn = (name, start, stop) => {
    scrollTl.fromTo(
      name,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: '.wrapper',
          start: start + 'px',
          end: '+=500px',
          scrub: true,
          toggleActions: 'restart complete reverse none',
        },
      }
    );
    scrollTl.to(name, {
      scrollTrigger: {
        trigger: '.wrapper',
        start: stop + 'px',
        toggleActions: 'restart none none none',
      },
      ease: Power3.easeIn,
      scale: 0,
    });
  };

  const completeAnim = (container, name, start, stop) => {
    scrollTl.fromTo(
      `${name}`,
      {
        height: 50,
      },
      {
        height: 100,
        ease: Bounce.easeIn,
        scrollTrigger: {
          trigger: '.wrapper',
          start: start,
          end: stop,
          toggleActions: 'restart complete reverse none',
        },
      }
    );
    scrollTl.fromTo(
      `${name} p`,
      {
        opacity: '0',
      },
      {
        opacity: '1',
        scrollTrigger: {
          trigger: '.wrapper',
          start: start,
          end: stop,
          toggleActions: 'restart complete reverse none',
        },
      }
    );
    scrollTl.fromTo(
      `${container} svg .circle`,
      {
        stroke: '#6A5B40',
        fill: '',
      },
      {
        fill: '#3AC267',
        stroke: '#3AC267',
        scrollTrigger: {
          trigger: '.wrapper',
          start: start,
          end: stop,
          toggleActions: 'restart complete reverse none',
        },
      }
    );
    scrollTl.fromTo(
      `${container} svg .tick`,
      {
        fill: '#6A5B40',
      },
      {
        fill: 'white',
        scrollTrigger: {
          trigger: '.wrapper',
          start: start,
          end: stop,
          toggleActions: 'restart complete reverse none',
        },
      },
      '<'
    );
  };
  useEffect(() => {
    // ScrollTrigger.create({
    //   end: '+=1000',
    //   pin: true,
    //   scrub: true,
    //   trigger: '.selling-steps',
    //   markers: {
    //     startColor: '#ff0000',
    //     endColor: 'green',
    //   },
    // });

    // ScrollTrigger.create({
    //   trigger: '.wrapper',
    //   start: 'top',
    //   end: '2000px',
    //   pin: '.selling-steps',
    //   pinSpacer: true,
    //   // markers: true,
    // });

    gsap.set('.selling-steps', { autoAlpha: 1 });
    gsap.set('.step_1 svg .circle', {
      fill: '#3AC267',
      stroke: '#3AC267',
    });
    gsap.set('.step_1 svg .tick', {
      fill: '#fff',
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.selling-steps',
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=2000',
      },
    });

    scrollTl.fromTo(
      '.step_img--1',
      {
        scale: 1,
      },
      {
        scale: 0,
        scrollTrigger: {
          trigger: '.wrapper',
          start: '200px',
          end: '500px',
          scrub: true,
          toggleActions: 'restart complete reverse none',
        },
      }
    );
    scrollTl.fromTo(
      '.progressLine',
      {
        height: 0,
      },
      {
        height: '100%',
        scrollTrigger: {
          trigger: '.wrapper',
          start: '0',
          end: '85%',
          scrub: true,
          toggleActions: 'restart complete reverse none',
        },
      }
    );

    animateFn('.step_img--2', 300, 800);
    animateFn('.step_img--3', 800, 1000);
    animateFn('.step_img--4', 1200, 1500);
    completeAnim('.step_2', '.step_text--2', '200px', '400px');
    completeAnim('.step_3', '.step_text--3', '600px', '800px');
    completeAnim('.step_4', '.step_text--4', '1000px', '1200px');
    // completeAnim('.step_3', '.step_text--3', '400px', '1000px');
  }, []);

  const largeScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <>
      {largeScreen ? (
        <SellingStepMobile />
      ) : (
        <div className='wrapper relative h-[2800px]'>
          <div className='selling-steps xl:container  mx-auto h-full   '>
            <div className='grid lg:grid-cols-2 h-screen item-container items-center justify-center  justify-items-center  '>
              <div>
                <div className='relative'>
                  <svg
                    width='474'
                    height='474'
                    viewBox='0 0 474 474'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='237' cy='237' r='237' fill='#EEECE7' />
                  </svg>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <img
                      src={step1.src}
                      alt=''
                      className='h-full w-full  step_img--1 origin-bottom'
                    />
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <img
                      src={step2.src}
                      alt=''
                      className='h-full w-full  step_img--2 origin-bottom'
                    />
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <img
                      src={step3.src}
                      alt=''
                      className='h-full w-full  step_img--3 origin-bottom'
                    />
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <img
                      src={step4.src}
                      alt=''
                      className='h-full w-full  step_img--4 origin-bottom'
                    />
                  </div>
                </div>
              </div>
              <div className='justify-self-start'>
                <h1 className='text-[40px] text-primaryColor'>
                  Sell your product in 4 <br /> simple steps
                </h1>
                <div className='relative flex flex-col gap-4 h-full mt-4'>
                  <div
                    className='w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]'
                    style={{
                      height: `calc(100% - 8px)`,
                    }}
                  ></div>
                  <div className='w-[2px] progressLine  bg-[#6A5B40] absolute left-3 z-[-1] '></div>
                  <div className='flex gap-5 step_1'>
                    <div>
                      <Tick />
                    </div>
                    <div>
                      <h1 className='text-2xl opacity-80'>
                        Add product details
                      </h1>
                      <p className='my-2 text-[#757575]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_2'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--2'>
                      <h1 className='text-2xl opacity-80 '>Create a link</h1>
                      <p className='my-2 text-[#757575] opacity-0 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_3'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--3'>
                      <h1 className='text-2xl opacity-80'>
                        Share on social media
                      </h1>
                      <p className='my-2 text-[#757575] opacity-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_4'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--4'>
                      <h1 className='text-2xl opacity-80'>Get orders</h1>
                      <p className='my-2 text-[#757575] opacity-0 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
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

export default SellingSteps;
