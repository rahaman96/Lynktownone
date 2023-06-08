import React from 'react';
import Layout from '../components/Layout/Layout';

const ShoppingNDelivery = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Shipping & Delivery Policy
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12 px-4 py-8 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className=' text-sm md:text-base'>
                We, at LynkTown make all commercial and reasonable endeavors to
                ensure that Products are delivered to the Users in a timely
                fashion. Users are required to peruse and understand the terms
                contained in this Delivery Policy. If you do not agree then you
                are advised not to accept the Terms of Use and the Shipping and
                Delivery Policy and may abstain from using the Platforms. The
                terms contained in this Shipping and Delivery Policy shall be
                accepted without modification and accordingly, you agree to be
                bound by the terms contained herein.
              </h4>
            </div>
            <div className='my-5 text-sm sm:text-base'>
              <ul className='list-disc ml-5'>
                <li className='mb-4'>
                  All products are shipped from the respective verified vendors
                  to respective shipping address(s) provided by the
                  user/customer/purchaser within 2 to 3 working days. As we
                  endeavor to deliver products all across India, we partner with
                  third party courier services providers viz. Ship Rocket
                  (“Courier Partners”) to effectuate delivery and associated
                  time of delivery will be around 1 week throughout India.
                  Details of delivery partners will be provided to the users
                  upon the purchased product being handed over to the delivery
                  partner by LynkTown.
                </li>
                <li className='mb-4'>
                  A standard date of delivery shall be provided to the Users in
                  the order confirmation email. Users are to provide a complete
                  street address along with their pin-code details at the time
                  of placing the purchase order.
                </li>
                <li className='mb-4'>
                  Our orders are processed on weekdays i.e from Monday to
                  Saturday, excluding national or declared holidays.
                </li>
                <li className='mb-4'>
                  In case you book multiple products and services in one
                  transaction, efforts will be made to ship all products
                  together. However, this may not always be possible.
                  Furthermore, we process to only one shipping address per
                  order, therefore, in case, any customer places an order of
                  several items to be shipped to different addresses, each
                  address shall be treated as a separate order.
                </li>
                <li className='mb-4'>
                  We do not ship to Post Office Box address(es) and do not take
                  any responsibility for non-delivery of orders in case an order
                  is delivered to P. O. Box and not received by the customer.
                </li>
                <li className='mb-4'>
                  Orders once confirmed cannot be edited/ modified/ or changed.
                  However, We accept such requests for address change, made
                  within 12 hours of placing the order or from order
                  confirmation. For related concerns and queries, you may reach
                  us at lynktown@gmail.com.
                </li>
                <li className='mb-4'>
                  Keeping in view the ease of delivery, our courier partners
                  will make three (3) delivery attempts at the address specified
                  by the user or customer, and thereafter if the order/ package
                  remains undelivered, our courier partners will intimate us
                  regarding the said non-delivery.
                </li>
                <li className='mb-4'>
                  We will make sure our vendors keep stock of all products that
                  they sell. In case you have made payment for a product that is
                  unavailable or would take longer to deliver then, we will make
                  proactive attempts to communicate the User about the delay,
                  within 2 working days, on his/her registered mobile number or
                  email address.
                </li>
                <li className='mb-4'>
                  Upon order confirmation, we provide the User a tracking number
                  for the order via Email and SMS. Your orders can be
                  conveniently tracked through the Online Tracking Facility
                  provided by our shipping partners. In case of any delivery
                  related concerns or disputes or if the package status is
                  visible as non-deliverable, you are requested to contact our
                  courier partners’ customer service numbers - 92666-23006.
                </li>
              </ul>
            </div>
            <h4 className=' text-sm md:text-base ml-5'>
              You can also mail us at lynktown@gmail.com with your order details
              in case of further queries or concerns.
            </h4>

            <div className='my-5 md:my-8 text-sm sm:text-base'>
              <h1 className=' text-lg font-bold '>Return Guidelines:</h1>
              <ol className='list-decimal ml-5 my-6'>
                <li className='mb-5'>
                  Your address and the product that you wish to return must be
                  eligible for a refund.
                </li>
                <li className='mb-5'>
                  Once the return is received, you will, in accordance with
                  LynkTown Refund Policy, be issued a refund to your original
                  payment method.
                </li>
                <li className='mb-5'>
                  When trying on products, please ensure that you are not
                  wearing perfume/aftershave or deodorant that may leave a scent
                  or marks on the item.
                </li>
                <li className='mb-5'>
                  All labels must be attached and intact when returning any
                  items to us. We will not accept the order return of products
                  where it is evident that these instructions are not being
                  followed.
                </li>
                <li className='mb-5'>
                  The returned product must be in its original packaging with
                  any enclosed returns/exchange documentation within 3 to 4
                  working days.
                </li>
                <li className='mb-5'>
                  Faulty returns must be sent back for inspection.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingNDelivery;
