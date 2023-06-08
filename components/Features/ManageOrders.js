import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MeasurementImg from '/public/assets/images/features/orders.png';

const ManageOrders = ({ currentTab }) => {
  return (
    <AnimatePresence>
      {currentTab === 'manageOrders' && (
        <motion.div
          key='alterations'
          className='grid lg:grid-cols-[65%_35%] gap-8 lg:gap-10 items-center h-[900px] lg:h-[500px] xl:h-[560px] '
        >
          <div className='order-2 lg:order-[-1]'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='text-lg font-medium md:text-xl lg:text-3xl text-[#333]'
            >
              Manage all your orders in one place
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='my-5 md:my-10 leading-[28.61px] text-sm md:text-base text-[#757575]'
            >
              Ship, track and manage all your orders all in one place so you get
              more time to build your business.
            </motion.p>
          </div>
          <div>
            <div className='relative'>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='lg:max-w-[500] max-w-[292px] max-h-[292px] lg:max-h-[500px] mx-auto 2xl:w-[373px] 2xl:h-[373px]'
                viewBox='0 0 338 338'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='168.815'
                  cy='168.815'
                  r='168.815'
                  fill='url(#paint0_linear_930_437)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_930_437'
                    x1='53.7139'
                    y1='139.4'
                    x2='168.815'
                    y2='337.63'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#857250' />
                    <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                  </linearGradient>
                </defs>
              </motion.svg>
              <div className='absolute top-2/4 left-2/4 translate-x-[-50%]   translate-y-[-50%]'>
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  src={MeasurementImg.src}
                  transition={{
                    ease: 'easeIn',
                  }}
                  alt=''
                  className='origin-bottom w-full h-full min-w-[180px] max-w-[203.14px] min-h-[350.58px]  max-h-[439px] lg:min-h-[350.16px] xl:min-h-[466.16px] lg:min-w-[215.43px]'
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ManageOrders;
