import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      id: 1,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'You upload the product details, pictures and all the needed details and craete a link with the help of LynkTown app. You can then share that link on multiple social platforms and with your customers to get orders.',
    },
    {
      id: 2,
      question: 'Can I create one link and add multiple products under it?',
      ans: 'Yes! You can add multiple products from the "add products" category and add multiple products of your choice and create one link. You can then share that link to all your social media and get orders.',
    },
    {
      id: 3,
      question: 'Do I need to ship orders on my own?',
      ans: `No. You don't have to worry about any shipping at all. LynkTown has its own vendors who take care of all the shipping process. `,
    },
    {
      id: 4,
      question: 'How can I track all my orders?',
      ans: 'You can track all your orders from the dashboard of LynkTown app in one go. You will be able to see the vendor details and track the shipment orders as well.',
    },
    {
      id: 5,
      question: 'Will I need to reach out to customers for measurements?',
      ans: 'No. Your customers upload their measurements via the app.',
    },
    {
      id: 6,
      question: 'What happens if my customers ask for alteration or exchange?',
      ans: 'Everything is handled by the LynkTown app. Measurements are uploaded by the customers for custom orders. For the exchange or alteration order requests, our shipping vendors take care of everything starting from picking the orders to delivering the order back to the customer.',
    },
    {
      id: 7,
      question: 'Can I choose the payment method?',
      ans: 'Yes! You can choose the payment methods from the options that best suits you and your customers needs.',
    },
  ];
  return (
    <div className='text-primaryColor bg-[#EEECE7]'>
      <div className='container mx-auto py-10'>
        <h1 className='text-center text-3xl  md:text-4xl lg:text-[40px] font-medium '>
          Have any questions?
        </h1>
        <div className='max-w-5xl mx-auto py-12'>
          {accordionData.map(item => {
            const { id, question, ans } = item;
            return (
              <Accordion
                key={id}
                sx={{
                  background: 'transparent',
                }}
                expanded={expanded === id}
                onChange={handleChange(id)}
              >
                <AccordionSummary
                  expandIcon={
                    <div className='text-black font-semibold text-lg md:text-2xl opacity-80'>
                      {expanded === id ? <span> - </span> : <span> + </span>}
                    </div>
                  }
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <h1 className='text-[#2A2A2A] text-base font-semibold opacity-80'>
                    {question}
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <p className='text-sm text-[#3B3B3B]'>{ans}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
