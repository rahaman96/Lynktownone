import React from 'react';
import step1 from '/public/assets/images/sellingSteps/1.png';
import step2 from '/public/assets/images/sellingSteps/2.png';
import step3 from '/public/assets/images/sellingSteps/3.png';
import step4 from '/public/assets/images/sellingSteps/4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import { IconButton } from '@mui/material';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const steps = [
  {
    id: 1,
    image: step1,
    title: 'Add product details',
  },
  {
    id: 2,
    image: step2,
    title: 'Create a link',
  },
  {
    id: 3,
    image: step3,
    title: 'Share on social media',
  },
  {
    id: 4,
    image: step4,
    title: 'Get orders',
  },
];

const autoPlay = 5000;
const SLIDE_LENGTH = 3;

// function move(idx) {

//   var elem = document.getElementById(`progressBar--${idx}`);

//   let matched;

//   const progressBars = document.querySelectorAll('.progressBar');
//   progressBars.forEach(item => {
//     if (!item.classList.contains(`progressBar--${idx}`)) {
//       matched = true;
//       item.style.width = 0 + '%';
//       elem.style.width = 0 + '%';
//     } else {
//       matched = false;
//     }
//   });

//   var width = 1;
//   var autoplayTime = autoPlay / 100;
//   var id = setInterval(frame, autoplayTime);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }

const SellingStepMobile = () => {
  return (
    <div className='container overflow-hidden mx-auto py-10 sm:py-16 px-4'>
      <h1 className='text-2xl text-primaryColor font-medium text-center md:text-4xl'>
        Start selling in 4 steps
      </h1>
      <div className='relative my-8'>
        <div className='absolute top-16 left-2/4 translate-x-[-50%]'>
          <svg
            className='w-[292px] h-[292px] sm:w-[420px] sm:h-[420px] '
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
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          // pagination={{
          //   clickable: true,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          // onSlideChange={e => move(e.activeIndex)}
          // onSwiper={swiper => {
          //   move(swiper.activeIndex);
          // }}
          className='!pb-14  seller-steps relative'
        >
          <div className='z-10 top-[40%] translate-y-[-50%] absolute left-0 sm:left-10       disabled:pointer-events-none disabled:opacity-60  swiper-btn-prev '>
            <IconButton>
              <MdOutlineArrowBackIos className='text-3xl' />
            </IconButton>
          </div>
          <div className=' z-10 top-[40%] translate-y-[-50%]  absolute right-0 sm:right-10     disabled:pointer-events-none  disabled:opacity-60 swiper-btn-next'>
            <IconButton>
              <MdArrowForwardIos className='text-3xl' />
            </IconButton>
          </div>

          {steps.map(item => {
            const { id, image, title, description } = item;

            return (
              <SwiperSlide key={id}>
                <div className='max-w-[767px] mx-auto flex justify-center flex-col items-center'>
                  <img
                    src={image.src}
                    alt=''
                    className='max-h-[420.65px] sm:max-h-[600px]'
                  />

                  <h3 className='text-base text-black font-semibold opacity-80 md:text-2xl text-center'>
                    {title}
                  </h3>
                  <div className='py-4 text-sm md:text-base text-center text-[#757575]'>
                    <h2>{description}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className='pagination flex items-center gap-4 max-w-2xl'>
          <div className='relative bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={0}
              id='progressBar--0'
              className='absolute progressBar progressBar--0 transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative   bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={1}
              id='progressBar--1'
              className='absolute progressBar progressBar--1 transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative  bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={2}
              id='progressBar--2'
              className='absolute progressBar progressBar--2 transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={3}
              id='progressBar--3'
              className='absolute progressBar progressBar--3 transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SellingStepMobile;
