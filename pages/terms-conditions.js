import React from 'react';
import Layout from '../components/Layout/Layout';

const TermsNConditionPoints = [
  {
    id: 1,
    point: (
      <>
        Our <b>Promotion partners</b> and third parties who operate promotions
        with us or on our behalf - will be named in the Specific Rules.
      </>
    ),
  },
  {
    id: 2,
    point: (
      <>
        By entering a Promotion, you agree to be bound by these terms and
        conditions along with any other Specific Rules which relate to a
        Promotion.
      </>
    ),
  },
  {
    id: 3,
    point: (
      <>
        By using or attempting to use the redemption code for an offer, you
        agree to accept and be bound by the terms and conditions offered by
        LynkTown.
      </>
    ),
  },
  {
    id: 4,
    point: (
      <>
        Promotions will start immediately after the first announcement unless a
        later start date/time is specified. The closing date/time for a
        promotion will be made clear in the specific rules or the relevant
        promotional materials.
      </>
    ),
  },
  {
    id: 5,
    point: (
      <>
        Each promotion will be open to individuals who are residents of India
        and aged 18 and above unless the Specific Rules. Certain promotional
        materials or announcements might specify a different geographic region
        or a different minimum age.
      </>
    ),
  },

  {
    id: 6,
    point: (
      <>
        <b>Offer Period.</b> Promotions are only available for a limited time
        during occasions and special hours, and has the right to cancel or
        change any promotion at any time without notice and at its sole
        discretion.
      </>
    ),
  },
  {
    id: 7,
    point: (
      <>
        <b>Conditions.</b> Promotions are not valid for cash or equivalent.
        Promotions/offers do not apply to any previous purchases made by the
        customers nor combine with any other offers or discounts including price
        matching of any other retailer.
      </>
    ),
  },
  {
    id: 8,
    point: (
      <>
        <b>Offers are non-transferable.</b> All monetary amounts specified in
        these terms and conditions are in Indian Rupees [INR].
      </>
    ),
  },
  {
    id: 9,
    point: (
      <>
        Returns and exchanges are subject to return policy. If you return or
        seek a refund on any item purchased using a promotional offer, there
        will be no refund based on the value of the discount.
      </>
    ),
  },
  {
    id: 10,
    point: <>Gift Cards or clearance items are not eligible for a refund.</>,
  },
  {
    id: 11,
    point: (
      <>
        LynkTown reserves the right to vary the terms and conditions of the
        offer by the company&apos;s discretion.
      </>
    ),
  },
];

const TermsNCondition = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Terms & Condition
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12 p-4 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className=' text-sm md:text-base'>
                These are the terms and conditions which apply to any
                competition, prize draw, or promotion that our partners and we
                may run, whether on our websites or theirs, social media
                platforms, and more. In these terms and conditions,
                &apos;we&apos;, &apos; us&apos;, &apos;our&apos; and
                &apos;Promoter &apos; all mean LynkTown team. Our registered
                address is:
              </h4>
            </div>
            <div className='mt-6'>
              <h1 className='underline text-lg font-bold '>
                Following are the terms and conditions you should know:
              </h1>
              <ul className='list-disc ml-7'>
                {TermsNConditionPoints.map(item => {
                  const { id, point } = item;
                  return (
                    <li key={id} className='my-6'>
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsNCondition;
