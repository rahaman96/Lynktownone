import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import image1 from '/public/assets/images/testimonial/1.jpg';
import image2 from '/public/assets/images/testimonial/2.jpg';
import image3 from '/public/assets/images/testimonial/3.jpg';
import image4 from '/public/assets/images/testimonial/4.jpg';

const carosuelPoint = [
  {
    id: 1,
    review:
      '“Trusted app that can make me sell my products globally. I am very excited with the way we can process our order through LynkTown app. Looking forward to their new features “',
    img: image1,
    stars: 5,
    name: 'Akash Gupta',
    role: 'Fashion Designer',
  },

  {
    id: 2,
    review: `“I would highly recommend this app for someone passionate about starting a small business. It's one of the quickest and easiest ways to start selling on the go. “`,
    img: image2,
    stars: 5,
    name: 'Shwetha',
    role: 'Fashion Designer',
  },
  {
    id: 3,
    review:
      '“A real social commerce app that I have recently come across. Easiest mode of selling products online. The awesome thing about this app is we can add any number of products in a single order link. “',
    img: image3,
    stars: 5,
    name: 'Maniratna ',
    role: 'Retail seller',
  },
  {
    id: 4,
    review:
      '“This is indeed a revolutionary way of social selling. Hassle free payment and shipping, we just have to concentrate on creating amazing products rest everything will be taken care of by LynkTown. I am a final year fashion tech student and I must say LynkTown is my buddy now.“',
    img: image4,
    stars: 5,
    name: 'Twinka ',
    role: 'Fashion Designer',
  },
];

const Testimonial = () => {
  return (
    <div className='bg-[#EEECE7] '>
      <div className='container mx-auto overflow-hidden py-24 lg:py-28 xl:py-36  px-4'>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          slidesPerView={1}
          className='!pb-14 '
        >
          {carosuelPoint.map(item => {
            const { img, review, stars, id, name, role } = item;

            return (
              <SwiperSlide key={id}>
                <div className='max-w-[900px] mx-auto flex justify-center flex-col items-center'>
                  <img
                    src={img.src}
                    alt=''
                    className='w-[101px] h-[101px] rounded-full object-cover md:w-[200.43px] md:h-[200.43px]'
                    style={{
                      objectPosition: 'top center',
                    }}
                  />
                  <div className='flex justify-center my-6 md:my-8 gap-3'>
                    {Array.from({ length: stars }).map((star, idx) => (
                      <svg
                        key={idx}
                        width='19'
                        height='18'
                        viewBox='0 0 19 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.54894 0.831349C8.8483 -0.089962 10.1517 -0.0899632 10.4511 0.831347L11.9697 5.50511C12.1035 5.91713 12.4875 6.19609 12.9207 6.19609H17.835C18.8037 6.19609 19.2065 7.43571 18.4228 8.00511L14.447 10.8937C14.0966 11.1483 13.9499 11.5997 14.0838 12.0117L15.6024 16.6854C15.9017 17.6068 14.8472 18.3729 14.0635 17.8035L10.0878 14.9149C9.7373 14.6603 9.2627 14.6603 8.91221 14.9149L4.93648 17.8035C4.15276 18.3729 3.09828 17.6068 3.39763 16.6854L4.91623 12.0117C5.05011 11.5997 4.90345 11.1483 4.55296 10.8937L0.577221 8.00511C-0.206493 7.43571 0.196283 6.19609 1.16501 6.19609H6.07929C6.51252 6.19609 6.89647 5.91713 7.03035 5.50511L8.54894 0.831349Z'
                          fill='#FFC400'
                        />
                      </svg>
                    ))}
                  </div>
                  <h3 className='text-sm sm:text-base md:text-2xl text-center'>
                    {review}
                  </h3>
                  <div className='py-4 text-sm md:text-base text-center text-[#6A5B40]'>
                    <h2>{name}</h2>
                    <h3 className='my-2'>{role}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
