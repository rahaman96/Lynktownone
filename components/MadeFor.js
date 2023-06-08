import React from 'react';
import image1 from '/public/assets/images/madefor/1.png';
import image2 from '/public/assets/images/madefor/2.png';
import image3 from '/public/assets/images/madefor/3.png';
import image4 from '/public/assets/images/madefor/4.png';
import image5 from '/public/assets/images/madefor/5.png';
import image6 from '/public/assets/images/madefor/6.png';
const MadeFor = () => {
  return (
    <section className='min-h-[70vh] sm:h-[80vh] md:h-full md:py-40 container mx-auto gap-10 flex flex-col md:flex-row md:justify-center items-center pb-56 pt-10 sm:py-20 md:pt-0'>
      <div className='relative flex-1 w-full h-full md:h-[794px] hidden md:block'>
        <img
          src={image1.src}
          alt=''
          className='absolute rounded-[7.78px] right-[5%] top-44'
        />
        <img
          src={image2.src}
          alt=''
          className='absolute rounded-[7.78px] left-0  top-64 z-10'
        />
        <img
          src={image3.src}
          alt=''
          className='absolute rounded-[7.78px] right-[5%] bottom-0'
        />
      </div>
      <div className='justify-center flex-1 w-full text-center'>
        <h1 className='text-[24px] md:text-[32px] lg:text-[40px] text-primaryColor underline font-medium'>
          Made For
        </h1>
        <p className='text-[#757575]  text-[24px] md:text-[32px] leading-[46px]  md:leading-[56px] lg:text-[40px] mt-8'>
          Business owners <br /> Professionals <br /> Creatives <br /> Leaders{' '}
          <br /> Artists
        </p>
        <div className='relative mt-5 md:mt-10'>
          <h4 className='md:text-[32px] text-[24px]  lg:text-[40px] text-primaryColor font-semibold'>
            for you
          </h4>
          <svg
            className='absolute left-2/4 top-[-8px] translate-x-[-52%]  md:hidden'
            width='118'
            height='43'
            viewBox='0 0 118 43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M115.316 31.7226C108.217 32.2435 101.531 35.3264 94.5467 36.5889C90.6233 37.2982 86.6265 37.2238 82.6676 37.6161C77.9545 38.0832 73.2381 38.7544 68.537 39.3382C59.7301 40.4318 51.0259 41.0382 42.1613 41.3792C34.014 41.6927 26.3014 40.1781 18.3464 38.5322C14.0181 37.6367 9.15999 36.3386 5.59669 33.568C3.27646 31.7639 2.37869 30.0263 1.60489 27.2025C0.69168 23.8699 1.77662 22.235 4.32773 20.1605C9.83557 15.6817 16.1141 11.9876 22.974 10.0351C38.7331 5.54981 54.9683 3.01638 71.3291 2.28289C77.5669 2.00324 84.3015 1.13502 90.5205 1.92467C96.4737 2.68056 101.774 5.79328 106.616 9.17398C109.766 11.3741 112.902 14.7666 114.627 18.2357C115.316 19.6204 116.296 21.2535 115.917 22.8806C115.482 24.7489 113.675 26.3655 112.49 27.764C109.894 30.8266 107.226 33.7083 104.294 36.442C102.442 38.169 100.502 40.7002 98.073 41.6229'
              stroke='#6A5B40'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>

          <svg
            className='absolute left-2/4 top-[-8px] translate-x-[-52%] hidden md:block'
            width='211'
            height='78'
            viewBox='0 0 211 78'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M206.718 56.8703C194.053 57.7996 182.126 63.2994 169.666 65.5517C162.667 66.817 155.537 66.6844 148.474 67.3842C140.066 68.2174 131.652 69.4148 123.266 70.4563C107.554 72.4073 92.0265 73.4891 76.2122 74.0975C61.6778 74.6566 47.9188 71.9548 33.7273 69.0185C26.0057 67.4209 17.339 65.1052 10.9822 60.1625C6.84293 56.944 5.24133 53.8442 3.86091 48.8066C2.23177 42.8615 4.16726 39.9448 8.71836 36.2439C18.5442 28.2539 29.7448 21.6637 41.9827 18.1806C70.0964 10.1789 99.0595 5.65935 128.247 4.35083C139.375 3.85193 151.389 2.30306 162.484 3.71177C173.104 5.06025 182.559 10.6133 191.197 16.6443C196.818 20.5693 202.411 26.6213 205.49 32.8102C206.718 35.2803 208.467 38.1938 207.79 41.0965C207.013 44.4294 203.79 47.3135 201.676 49.8083C197.046 55.2719 192.286 60.4127 187.056 65.2896C183.751 68.3705 180.291 72.8861 175.957 74.5322'
              stroke='#6A5B40'
              strokeWidth='5'
              strokeLinecap='round'
            />
          </svg>
        </div>
      </div>
      <div className='relative w-full  md:w-[80%] mt-5 pb-36 lg:pb-0  flex-1 h-[450px] sm:h-[500px] md:h-[794px]'>
        <img
          src={image3.src}
          alt=''
          className='block md:hidden absolute rounded-xl h-[156.76px] w-[157.38px] sm:w-[206.76px] sm:h-[250px] md:w-auto md:h-auto top-10 left-[2%] sm:left-[5%] sm:top-[-50px] md:left-[20%] md:top-40 object-cover'
        />

        <img
          src={image4.src}
          alt=''
          className='hidden md:block absolute rounded-[7.78px] h-[156.76px] w-[157.38px] sm:w-[206.76px] sm:h-[250px] md:w-auto md:h-auto top-10 left-[2%] sm:left-[5%] sm:top-[-50px] md:left-[20%] md:top-40 object-cover'
        />
        <img
          src={image5.src}
          alt=''
          className='absolute rounded-[12.78px] h-[100.08px] w-[100.32px]  sm:w-[150px] sm:h-[150px] md:w-auto md:h-auto   md:right-[5%] top-12 sm:right-0 sm:top-[-50px]  right-[5%]  md:top-72 z-10 object-cover'
        />
        <img
          src={image6.src}
          alt=''
          className='absolute rounded-[15.78px]   h-[154.63px] w-[153.45px]  sm:w-[230px] sm:h-[250px] md:w-auto md:h-auto     bottom-[-150px]  z-10 sm:bottom-0  left-[40%] md:left-[5%] md:bottom-0 object-cover'
        />
      </div>
    </section>
  );
};

export default MadeFor;
