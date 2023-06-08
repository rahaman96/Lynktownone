import React from "react";
import Layout from "../components/Layout/Layout";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

export const cancellations = [
  {
    id: 1,
    question: "How to Cancel an Order on LynkTown that has Been Shipped?",
    answer: (
      <>
        You cannot cancel the order that is already shipped. If you still raise
        a cancellation request, the seller contacts the buyer and informs them
        that the product is already shipped. The buyer still has the option to
        refund the item.
        <br />
        You can write to our customer support team on lynktown@gmail.com or call
        us on +91 96639 89996
      </>
    ),
  },
  {
    id: 2,
    question:
      "You can cancel your order before the processing i.e 2 hours before your order. The refund of the canceled order will be credited to your account. ",
    answer: (
      <>
        You can cancel your order before the processing i.e 2 hours before your
        order. The refund of the canceled order will be credited to your
        account.
        <br />
        Here is how to cancel your order:
        <ul className="list-disc">
          <li>Log in to your account and go to My Account</li>
          <li>Select the appropriate order from Recent Orders</li>
          <li>
            Click on ‘Cancel Order’ for the items you want to cancel,
            individually
          </li>
          <li>Select the reason and confirm the cancellation</li>
        </ul>
        Once you cancel the order, we&apos;ll send you an acknowledgment of the
        cancellation. Once the brand/designer has processed your order, you are
        not allowed to cancel the order.
      </>
    ),
  },
  {
    id: 3,
    question: "When will I receive the refund for the canceled order?",
    answer: (
      <>
        Ensure that the order is canceled before the brand/designer has
        processed the order.
        <ul className="list-disc">
          <li>
            For{" "}
            <b> payments done through credit/debit cards or net banking ,</b> we
            will refund the payment to the source account within 24-48 business
            hours of receiving the products back. It may take 2-3 additional
            business days for the amount to reflect in your account.
          </li>
          <li>
            For <b> cash on delivery transactions, </b> we will initiate a bank
            transfer against the refund amount against the billing details
            shared by you. This process will be completed within 24-48 business
            hours of us receiving the products back and your bank details on
            email. It will take an additional 2-3 business days for the amount
            to reflect in your account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    question: "What does non-cancellation policy mean?",
    answer:
      "Customized orders once shipped by the seller cannot be cancelled. The vendor can charge a return or a cancellation fee based on the cancellation made by the buyer.",
  },
  {
    id: 5,
    question: "Why are the cancel links disabled?",
    answer:
      "That means the products from your order have already been shipped and you can't make any cancellations now.",
  },
  {
    id: 6,
    question: "Will LynkTown cancel the orders?",
    answer: (
      <>
        We reserve the right to cancel the order if
        <ul className="list-disc">
          <li>
            We have insufficient stock to deliver the goods you have ordered;
          </li>
          <li>We do not deliver to your area; or</li>
          <li>
            One or more of the goods you ordered was listed at an incorrect
            price due to a typographical error or an error in the pricing
            information received by us from our suppliers.
          </li>
          <li>
            If we do cancel your orders, we will notify you by e-mail and will
            re-credit to your account any sum deducted by us from your credit or
            debit card as soon as possible but in any event within 30 days of
            your order. We will not be obliged to offer any additional
            compensation for the disappointment suffered
          </li>
        </ul>
      </>
    ),
  },
];

const Cancellation = () => {
  return (
    <Layout>
      <div className=" pb-24 relative ">
        <header className="bg-primaryColor h-[240px] md:h-[311.7px] py-[60px]">
          <h1 className="font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center">
            Cancellation
          </h1>
        </header>
        <div className="px-4">
          <div
            className="gap-5 rounded-[19px]  xl:p-12  px-4 py-8 py-8 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]"
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className="text-sm md:text-base">
                We are well aware that you are all excited to receive your
                products ASAP. Regrettably, when you change your mind and choose
                to cancel your orders, please note that you can cancel the order
                before we process it. Once the order is processed, we do not
                entertain any cancellation requests.
                <br />
                <br />
                You may also send an email on lynktown@gmail.com
                <br />
                <br />
                Please be advised that some orders are shipped almost
                immediately, and it may not always be possible to cancel.
              </h4>
            </div>
            <div className="mt-6">
              <h1 className="underline text-lg font-bold ">
                Frequently asked questions
              </h1>
              <div className={`support--pages__accordion--styles my-10`}>
                {cancellations?.map((faq, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<MdExpandMore className="text-2xl" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
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
