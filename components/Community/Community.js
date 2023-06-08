import React from 'react';
import { Award, Hands } from './Icons';
import image1 from '/public/assets/images/community/1.png';
import image2 from '/public/assets/images/community/2.png';
import image3 from '/public/assets/images/community/3.png';
import { Button } from '@mui/material';
import { Instagram } from '../Hero/Icons';

const Community = () => {
  return (
    <section className='lg:min-h-screen  bg-[#EEECE7]  community_main z-20 '>
      <div className=' grid md:grid-cols-2 md:justify-center md:grid-rows-[300px_300px]  xl:grid-rows-[350px_350px]  2xl:grid-rows-[400px_400px]  lg:container   mx-auto gap-4 lg:gap-10 lg:py-20 p-5'>
        <div
          className='h-[485.7px] md:h-full row-span-full bg-cover w-full  relative rounded-[24px]'
          style={{
            backgroundImage: `linear-gradient(0deg, #4A3E26 2%, rgba(106, 91, 64, 0) 78.78%), linear-gradient(180deg, rgba(74, 62, 38, 0.55) 19.45%, rgba(0, 0, 0, 0) 35.81%), url(${image1.src})`,
          }}
        >
          <div className='z-10 absolute p-6 md:p-12 text-white w-full'>
            <div className='flex justify-between w-full'>
              <div>
                <h1 className='text-lg lg:text-[28px] xl:text-[32px] font-semibold'>
                  Community
                </h1>
              </div>
            </div>
          </div>
          <div className='z-10 absolute bottom-0 md:text-xl lg:text-2xl xl:text-[28px] md:!leading-[40px] p-6 md:p-12 opacity-70 text-white w-full'>
            <h4>
              Be a part of a creative business community to collaborate and grow
              your business
            </h4>
          </div>
        </div>
        <div
          className='bg-cover  h-[250.7px] md:h-full md:w-full  rounded-[24px] community__img--2 relative'
          style={{
            backgroundImage: `linear-gradient(0deg, #4A3E26 2%, rgba(106, 91, 64, 0) 78.78%), linear-gradient(180deg, rgba(74, 62, 38, 0.55) 19.45%, rgba(0, 0, 0, 0) 35.81%), url(${image2.src})`,
          }}
        >
          <div className='z-10 absolute p-6 md:p-12 text-white w-full'>
            <div className='flex justify-between w-full'>
              <div>
                <h1 className='text-lg lg:text-[28px] xl:text-[32px] font-semibold'>
                  Helpful Hand
                </h1>
              </div>
              <div>
                <Hands />
              </div>
            </div>
          </div>
          <div className='z-10 absolute bottom-0 md:text-xl lg:text-2xl xl:text-[28px] md:!leading-[40px] p-6 md:p-12 opacity-70 text-white w-full'>
            <h4>
              Get real world insights and daily tips to help you with your
              branding and marketing
            </h4>
          </div>
        </div>
        <div
          className='bg-cover w-full h-[250.7px] md:h-full  rounded-[24px] relative  community__img--3'
          style={{
            backgroundImage: `linear-gradient(0deg, #4A3E26 2%, rgba(106, 91, 64, 0) 78.78%), linear-gradient(180deg, rgba(74, 62, 38, 0.55) 19.45%, rgba(0, 0, 0, 0) 35.81%), url(${image3.src})`,
          }}
        >
          <div className='z-10 absolute p-6 md:p-12 text-white w-full'>
            <div className='flex justify-between w-full'>
              <div>
                <h1 className='text-lg lg:text-[28px] xl:text-[32px] font-semibold'>
                  Trustworthy
                </h1>
              </div>
              <div>
                <Award />
              </div>
            </div>
          </div>
          <div className='z-10 absolute bottom-0 md:text-xl lg:text-2xl xl:text-[28px] md:!leading-[40px] p-6 md:p-12 opacity-70 text-white w-full'>
            <h4>
              Build your business with a platform trusted by 1000s of sellers
              from all over the world
            </h4>
          </div>
        </div>
      </div>
      <div className='flex justify-center md:pb-16 py-10 md:py-0'>
        <a
          href='https://www.instagram.com/lynktown'
          target='_blank'
          rel='noreferrer'
        >
          <Button className='!text-white lg:!h-[55px] !h-[42px] !md:h-[61px] !bg-primaryColor !p-2 !w-[173px] !relative hover:bg-primaryColor !rounded-[10px] !shadow-2xl'>
            Know more
            <div className='absolute right-[-25px] md:right-[-50px] md:top-[-10px]'>
              <Instagram />
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Community;
