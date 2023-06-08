import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import axios from 'axios'
import { Button, IconButton, useMediaQuery } from '@mui/material';
import Items from './Items';
import img1 from '/public/assets/images/collections/1.jpg';
import img2 from '/public/assets/images/collections/2.jpg';
import img3 from '/public/assets/images/collections/3.jpg';
import img4 from '/public/assets/images/collections/4.jpg';
import img5 from '/public/assets/images/collections/5.jpg';

const carouselItems = [
  {
    id: 1,
    brand: 'Allen solly',
    name: 'Blue jean jacket',
    price: '500.00',
    image: img1.src,
    height: '436.39px',
  },
  {
    id: 2,
    brand: 'Allen solly',
    name: 'Short yellow shirt',
    price: '600.00',
    image: img2.src,
    height: '335px',
  },
  {
    id: 3,
    brand: 'Allen solly',
    name: 'Blue fur jacket',
    price: '800.00',
    image: img3.src,
    height: '335px',
  },
  {
    id: 4,
    brand: 'Allen solly',
    name: 'white & black formals',
    price: '900.00',

    image: img4.src,
    height: '436.39px',
  },
  {
    id: 5,
    brand: 'Allen solly',
    name: 'Grey long dress',
    price: '1000.00',
    image: img5.src,
    height: '335px',
  },
];
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.getElementById('__next').appendChild(script);
  });
}
const SpecialCollection = () => {
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:1000px)');
  const tab = useMediaQuery('(max-width:890px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const large = useMediaQuery('(max-width:1430px)');


  async function displayRazorpay(total) {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }


  

    const  {data} = await axios.get(`https://us-central1-u2-lynk.cloudfunctions.net/createorderApi?total=${total}`).then((res)=>res).catch((err)=>{console.log(err)}) 

    

    const options = {
      key: 'rzp_live_SlUwiRcpOMKIzd',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      name: 'U2Lynks',
      description: 'Thank you for Shoping With Us',
      handler: function (response) {
       Alert("Thank you for Shoping With Us")
      },
     
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }



  return (
    <div className='py-12 md:py-20 relative overflow-hidden '>
      <div className='container mx-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-center md:text-left  text-primaryColor relative w-fit mx-auto md:mx-0'>
          Our special collection
          <svg
            width='182'
            className='absolute right-0 md:block hidden'
            height='13'
            viewBox='0 0 182 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M179.595 11.0129C167.997 8.43268 154.891 6.35938 140.74 5.37557C108.23 3.1155 74.9067 2.07087 41.473 2.13716C28.7257 2.16244 14.9176 1.84146 2.29527 2.52376'
              stroke='#6A5B40'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
          <svg
            className='absolute right-0 md:hidden'
            width='126'
            height='10'
            viewBox='0 0 126 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M123.966 8.24397C115.969 6.40239 106.932 4.92229 97.1751 4.21923C74.7601 2.6041 51.7844 1.85588 28.7327 1.90006C19.9437 1.91691 10.4233 1.68668 1.72057 2.17218'
              stroke='#6A5B40'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </h1>
      </div>
      <div className='py-20 px-1 md:px-5 '>
        <CarouselProvider
          // naturalSlideWidth={100}
          totalSlides={carouselItems.length}
          visibleSlides={
            match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3.3 : 5
          }
          isIntrinsicHeight
          naturalSlideWidth={100}
          naturalSlideHeight={125}
        >
          <Slider className='!items-center'>
            {carouselItems.map((item, index) => {
              return (
                <Slide index={index} key={index}>
                  <Items item={item} index={index} displayRazorpay={displayRazorpay}/>
                </Slide>
              );
            })}
          </Slider>
          <div className='absolute mt-5  md:mt-0 md:top-[80px] flex gap-6 right-[5%] lg:right-28'>
            <ButtonBack>
              <IconButton size='small'>
                <svg
                  className='w-[32px] h-[32px] md:w-[36px] md:h-[36px]'
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18 35.7086C8.34154 35.7086 0.5 27.867 0.5 18.2086C0.5 8.55009 8.34154 0.708557 18 0.708557C27.6585 0.708557 35.5 8.55009 35.5 18.2086C35.5 27.867 27.6585 35.7086 18 35.7086ZM21.6439 25.3339L14.5189 18.2086L21.6439 11.0833C22.1692 10.5584 22.1692 9.70502 21.6439 9.1801C21.119 8.65486 20.2656 8.65486 19.7407 9.1801L11.6638 17.257C11.1373 17.782 11.1373 18.6353 11.6638 19.1602L19.7407 27.2372C20.2656 27.7624 21.119 27.7624 21.6439 27.2372C22.1692 26.7122 22.1692 25.8589 21.6439 25.3339Z'
                    fill='#6A5B40'
                  />
                </svg>
              </IconButton>
            </ButtonBack>
            <ButtonNext>
              <IconButton size='small'>
                <svg
                  className='w-[32px] h-[32px] md:w-[36px] md:h-[36px]'
                  viewBox='0 0 35 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.5 0.708557C27.1585 0.708557 35 8.5501 35 18.2086C35 27.867 27.1585 35.7086 17.5 35.7086C7.84154 35.7086 0 27.867 0 18.2086C0 8.5501 7.84154 0.708557 17.5 0.708557ZM13.8561 11.0832L20.9811 18.2085L13.8561 25.3338C13.3308 25.8587 13.3308 26.7121 13.8561 27.237C14.381 27.7623 15.2344 27.7623 15.7593 27.237L23.8362 19.1601C24.3627 18.6352 24.3627 17.7818 23.8362 17.2569L15.7593 9.17994C15.2344 8.6547 14.381 8.6547 13.8561 9.17994C13.3308 9.70488 13.3308 10.5582 13.8561 11.0832Z'
                    fill='#6A5B40'
                  />
                </svg>
              </IconButton>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default SpecialCollection;
