import React from 'react';
import Layout from '../components/Layout/Layout';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

export const returnNRefundData = [
  {
    id: 1,
    question: 'How do I return or refund my order?',
    answer: (
      <>
        You may request returns for most items you buy listed on LynkTown .
        However, you can only return items explicitly identified as returnable
        on the product detail page within the given period of 14 days.
        <p>
          Items are returnable if you have received them in a condition that is
          -
        </p>
        <ul className='list-disc'>
          <li>· Physically damaged</li>
          <li>Has missing parts or accessories</li>
          <li>Defective</li>
          <li>
            Different from its description on the product detail page on
            LynkTown
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    question: 'How do I return items?',
    answer: (
      <>
        <ol className='list-decimal'>
          <li>Go to Your Orders.</li>
          <li>Choose an item that you want to return or replace.</li>
          <li>Select a reason from the menu and continue.</li>
        </ol>
        <b>Note:</b> The above process is applicable only if the product is
        returnable and the return window is still active.
        <br />
        If you need to contact the seller, this must be done in line with our
        return policy mentioned in LynkTown Returns Policy. If a seller fails to
        address your query in three business days, the LynkTown is available to
        you.
      </>
    ),
  },
  {
    id: 3,
    question: 'What are the return guidelines?',
    answer: (
      <>
        Following are the return guidelines:
        <ol className='list-decimal'>
          <li>
            Your address and the product that you wish to return must be
            eligible for a refund.
          </li>
          <li>
            Once the return is received, you will, in accordance with LynkTown
            Refund Policy, be issued a refund to your original payment method.
          </li>
          <li>
            When trying on products by designers, please ensure that you are not
            wearing perfume/aftershave or deodorant that may leave a scent or
            marks on the item.
          </li>
          <li>
            All labels must be attached and intact when returning any items to
            us. We will not accept the order return of products where it is
            evident that these instructions are not being followed.
          </li>
          <li>
            The returned product must be in its original packaging with any
            enclosed returns/exchange documentation.
          </li>
          <li>Faulty returns must be sent back for inspection.</li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    question: 'Categories not eligible for return if:',
    answer: (
      <>
        <ul className='list-disc'>
          <li>Products damaged due to misuse/overuse</li>
          <li>
            The original packaging including price tags, labels, original
            packing, freebies, and other accessories, is damaged.
          </li>
          <li>Serial Number has been tampered.</li>
          <li>
            Defective products that have not been covered under
            Seller/Manufacturer’s warranty
          </li>
          <li>Product is used or altered</li>
          <li>
            If the request is initiated after 15 business days of order delivery
          </li>
          <li>Free product provided by the brand.</li>
          <li>
            The original shipping charges and duties will not be refunded if the
            product is damaged while returning.{' '}
          </li>
          <li>
            Customized products are not returnable for size or fitting related
            issues, as it is customized for the user body measurements.
          </li>
        </ul>
        You must write or call customer care as suggested for the return of the
        product.
      </>
    ),
  },
];

const Cancellation = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Return & Refund
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
                We want our customers to love the experience of shopping with us
                and feel happy with their purchases, but if something is not
                right, let us know. You can return if the order is not as
                expected as what you expected. Once received, the customer care
                team at LynkTown would inspect the product for the need for
                exchange, and based on their jurisdiction, we will refund.
              </h4>
            </div>
            <div className='mt-6'>
              <h1 className='underline text-lg font-bold '>
                Frequently asked questions
              </h1>
              <div className={`support--pages__accordion--styles my-10`}>
                {returnNRefundData?.map((faq, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<MdExpandMore className='text-2xl' />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <h1>{faq.question}</h1>
                      </AccordionSummary>
                      <AccordionDetails>
                        <h4>{faq.answer}</h4>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cancellation;
