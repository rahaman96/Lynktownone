import React from 'react';

const Items = ({ item, index,displayRazorpay }) => {
  const { image, height, brand, name, price, id } = item;
  return (
    <div
      className={`w-[90%] md:w-[240px] cursor-pointer peer itemsContainer  hover:shadow-xl   lg:w-[280px] xl:w-[280px]  `}
      style={{
        marginTop: `${
          index === 0
            ? '0'
            : index === 1
            ? '25px'
            : index === 2
            ? '-35px'
            : index === 3
            ? '0'
            : '20px'
        }`,
      }}
    >
      <div className='mb-2'>
        <img
          src={image}
          alt=''
          style={{
            height: height,
          }}
          className={`w-full  object-cover`}
        />
      </div>
      <div className='py-5 itemText transition-all'>
        <h3 className='text-xs text-primaryColor'>{brand}</h3>
        <h2 className='text-sm'>{name}</h2>
        <div className='flex justify-between my-2 items-center pr-5'>
          <h1 className='text-lg font-semibold  '>₹{parseFloat(price)}</h1>
          <button
           onClick={()=>displayRazorpay(price)}
          className='w-[80px] text-xs h-[30px] bg-primaryColor text-white rounded-[6px]'>
            {' '}
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
