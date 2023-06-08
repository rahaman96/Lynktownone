import React from 'react';
import Layout from '../components/Layout/Layout';

const infoWeCollect = [
  {
    id: 1,
    point: (
      <>
        We collect information primarily to provide better services to all of
        our customers.
      </>
    ),
  },
  {
    id: 2,
    point: (
      <>
        We collect the following information from you when you use or signup on
        our website: Name, Address, Mail ID, Phone Number, IP Address
      </>
    ),
  },
  {
    id: 3,
    point: (
      <>
        When you visit our Site, some information is automatically collected.
        This may include information such as the Operating Systems (OS) running
        on your device, Internet Protocol (IP) address, access times, browser
        type, and language, and the website you visited before our Site. We also
        collect information about how you use Our products or services.
      </>
    ),
  },
  {
    id: 4,
    point: (
      <>
        We automatically collect purchase or content use history, which we
        sometimes aggregate with similar information from other customers to
        create features such as Best Seller, Top Rated, etc…
      </>
    ),
  },
  {
    id: 5,
    point: (
      <>
        The full Uniform Resource Locators (URL) clickstream to, through, and
        from our website (including date and time); cookie number; products
        and/or content you viewed or searched for; page response times; download
        errors; length of visits to certain pages; page interaction information
        (such as scrolling, clicks, and mouse-overs).
      </>
    ),
  },

  {
    id: 6,
    point: (
      <>
        We will retain your information as long as we require this to provide
        you with the goods and services and for such a period as mandated by the
        concerned laws.
      </>
    ),
  },
  {
    id: 7,
    point: (
      <>
        If you opt to receive marketing correspondence from us, subscribe to our
        mailing list or newsletters, enter into any of our competitions or
        provide us with your details at networking events, we may use your
        personal data for our legitimate interests in order to provide you with
        details about our goods, services, business updates, and events.
      </>
    ),
  },
];
const infoUses = [
  {
    id: 1,
    point: (
      <>
        We use the information we collect primarily to provide, maintain,
        protect and improve our current products and services.
      </>
    ),
  },
  {
    id: 2,
    point: (
      <>
        We use the information collected through this website as described in
        this policy and we may use your information to:
        <ol className='ml-3 lg:ml-5 xl:ml-7 list-decimal '>
          <li className='my-5'>
            We use the information we collect primarily to provide, maintain,
            protect and improve our current products and services.
          </li>
          <li className='my-5'>
            Understand and enhance your experience using our Site, products, and
            services.
          </li>
          <li className='my-5'>
            Personalize our products or services and make recommendations.
          </li>
          <li className='my-5'>
            Provide and deliver products and services you request.
          </li>
          <li className='my-5'>
            Process, manage, complete, and account for transactions.
          </li>
          <li className='my-5'>
            Provide customer support and respond to your requests, comments, and
            inquiries.
          </li>
          <li className='my-5'>
            Create and manage the online accounts you manage on our website.
          </li>
          <li className='my-5'>
            Send you related information, including confirmations, invoices,
            technical notices, updates, security alerts, and support and
            administrative messages.
          </li>
          <li className='my-5'>
            Communicate with you about promotions, upcoming events, and news
            about products and services.
          </li>
          <li className='my-5'>
            We may process your personal information without your knowledge or
            consent where required by applicable law or regulation for the
            purposes of verification of identity or for prevention, detection,
            or investigation, including of cyber incidents, prosecution, and
            punishment of offenses.
          </li>
          <li className='my-5'>
            Protect, investigate and deter against fraudulent, unauthorized, or
            illegal activity.
          </li>
        </ol>
      </>
    ),
  },
];

const TermsNCondition = () => {
  return (
    <Layout>
      <div className=' pb-24 relative '>
        <header className='bg-primaryColor  h-[240px] md:h-[311.7px] py-[60px]'>
          <h1 className='font-dmSerif text-3xl md:text-5xl lg:text-[56px] text-white text-center'>
            Privacy Policy
          </h1>
        </header>
        <div className='px-4'>
          <div
            className='gap-5 rounded-[19px]  xl:p-12  px-4 py-8 md:p-8 bg-white  max-w-[950px] w-full mt-[-120px]    mx-auto relative text-[#3B3B3B]'
            style={{
              boxShadow: `2px 10px 28px rgba(75, 0, 129, 0.12)`,
            }}
          >
            <div>
              <h4 className='text-sm md:text-base'>
                This policy applies to the website www.lynktown.com and to the
                business symbolized therein. The company recognizes the
                importance of maintaining your privacy. We value your privacy
                and appreciate your trust in us. This applies to current and
                former visitors to our website and app, and to all our online
                customers.
                <br />
                <br />
                The website is a property Dhaatri Naturals Pvt Ltd , an Indian
                company registered under the Companies Act, 2013 having its
                registered office at 224, Bannerghatta Main Rd, near Arekere
                Main Road, Omkar Nagar, Bilekahalli, Bengaluru, Karnataka
                560076.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '> Information We Collect</h1>
              <ul className='list-disc ml-3 lg:ml-5 xl:ml-7'>
                {infoWeCollect.map(item => {
                  const { id, point } = item;
                  return (
                    <li key={id} className='my-6'>
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>How We Use Information</h1>
              <ul className='list-disc ml-3 lg:ml-5 xl:ml-7'>
                {infoUses.map(item => {
                  const { id, point } = item;
                  return (
                    <li key={id} className='my-6'>
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>Cookie Policy</h1>
              <h4 className='mt-4'>
                A cookie is a small text file that we place on your mobile
                device to enable various features of LynkTown. ‘Cookies are used
                to store user preferences and to track user trends, so as to
                enhance your interactive experience and sincerely improve our
                services. You can change your cookie settings to accept or not
                accept cookies in your browser settings. If you do accept a
                ‘cookie’, you hereby agree to our use of any personal
                information collected by us using that cookie.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>Third-Party</h1>
              <h4 className='mt-4'>
                At times we may collaborate with third parties, brand owners, or
                other partners and make available certain offers, events, or
                special schemes. In such instances, your personal information
                may be shared with such third parties and/or may become
                available to them or be disclosed to them, such third parties
                may have their own applicable privacy rules and we shall not be
                liable for the use or misuse of your information by such third
                parties.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>
                WAYS OF COLLECTING INFORMATION
              </h1>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  Directly from the customer
                </h1>
                <h4>
                  We collect information directly from you when you register or
                  buy products. We also collect information if you post a
                  comment on our websites or ask us a question through phone or
                  email.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  Passively from the customer
                </h1>
                <h4>
                  We use tracking tools like Google Analytics, Google Webmaster,
                  browser cookies, and web beacons for collecting information
                  about your usage of our website.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  Information sourced from third-parties
                </h1>
                <h4>
                  For example, if you use an integrated social media feature on
                  our websites. The third-party social media site will give us
                  certain information about you. This could include your name
                  and email address.
                </h4>
              </div>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>
                USE OF YOUR PERSONAL INFORMATION
              </h1>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information to contact you
                </h1>
                <h4>
                  We might use the information you provide to contact you for
                  confirmation of a purchase on our website or for other
                  promotional purposes.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information to respond to your requests or
                  questions
                </h1>
                <h4>
                  We might use your information to confirm your registration for
                  an event or contest.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information to look at site trends and customer
                  interests
                </h1>
                <h4>
                  We may use your information to make our website and products
                  better. We may combine information we get from you with
                  information about you we get from third parties.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information for security purposes
                </h1>
                <h4>
                  We may use the information to protect our company, our
                  customers, or our websites.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information for marketing purposes
                </h1>
                <h4>
                  We might send you information about special promotions or
                  offers. We might also tell you about new features or products.
                  These might be our own offers or products, or third-party
                  offers or products we think you might find interesting.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We use the information to send you transactional
                  communications
                </h1>
                <h4>
                  We might send you an email to enroll in our newsletter or for
                  discounts and offers. We shall use information as otherwise
                  permitted by law.
                </h4>
              </div>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>
                SHARING OF INFORMATION WITH THIRD-PARTIES
              </h1>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We will share information with third parties who perform
                  services on our behalf
                </h1>
                <h4>
                  We share information with vendors who help us manage our
                  online registration process or payment processors or
                  transactional message processors. Some vendors may be located
                  outside of India.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We will share information with the event organizers
                </h1>
                <h4>
                  We share your information with event organizers and other
                  parties responsible for fulfilling the purchase obligation.
                  The event organizers and other parties may use the information
                  we give them as described in their privacy policies.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We may share information if we think we have to in order to
                  comply with the law or to protect ourselves
                </h1>
                <h4>
                  We will share information to respond to a court order or
                  subpoena. We may also share it if a government agency or
                  investigatory body requests it. Or, we might also share
                  information when we are investigating potential fraud.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We may share information with any successor to all or part of
                  our business
                </h1>
                <h4>
                  For example, if part of our business is sold we may give our
                  customer list as part of that transaction.
                </h4>
              </div>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  We may share your information for reasons not described in
                  this policy
                </h1>
                <h4>
                  We will tell you before we do this. We and our affiliates will
                  share/sell some or all of your personal information with
                  another business entity should we (or our assets) plan to
                  merge with, or be acquired by that business entity, or
                  reorganization, amalgamation, restructuring of business. We
                  have developed this policy to protect your personal/financial
                  information and keep it confidential. By visiting our website
                  LynkTown, you are accepting and consenting to the practices
                  described in this privacy policies. The following Privacy
                  Policy and Cookie Policy outlines the information we may
                  process and how we may use that information to better serve
                  you while using our website LynkTown.
                </h4>
              </div>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>EMAIL OPT-OUT</h1>
              <div className='my-5 ml-3 lg:ml-5 xl:ml-7'>
                <h1 className='font-semibold mb-2'>
                  You can opt-out of receiving our marketing emails
                </h1>
                <h4>
                  To stop receiving our promotional emails, please email
                  unsubscribe at lynktown@gmail.com. It may take about ten days
                  to process your request. Even if you opt-out of getting
                  marketing messages, we will still be sending you transactional
                  messages through email and SMS about your purchases.
                </h4>
              </div>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>THIRD-PARTY SITES</h1>

              <h4 className='my-4'>
                If you click on one of the links to third-party websites, you
                may be taken to websites we do not control. This policy does not
                apply to the privacy practices of those websites. You may read
                the privacy policy of other websites should you have any further
                elicitations.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>GRIEVANCE OFFICER</h1>

              <h4 className='my-4'>
                In accordance with Information Technology Act 2000 and rules
                made thereunder, the name and contact details of the Grievance
                Officer are provided below:
                <br /> Name: Srikanth Rajjoshi <br /> Phone: +91-7259111787{' '}
                <br /> Email: lynktown@gmail.com <br /> If you have any
                questions about this Policy or other privacy concerns, you can
                also email us at lynktown@gmail.com.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>UPDATES TO THIS POLICY</h1>

              <h4 className='my-4'>
                This Privacy Policy was last updated on Today. From time to time
                we may change our privacy practices. We will notify you of any
                material changes to this policy as required by law. We will also
                post an updated copy on our website. Please check our site
                periodically for updates.
              </h4>
            </div>
            <div className='mt-6 '>
              <h1 className=' text-lg font-bold '>JURISDICTION</h1>

              <h4 className='my-4'>
                If you choose to visit the website, your visit and any dispute
                over privacy are subject to this policy and the website’s terms
                of use. In addition to the foregoing, any disputes arising under
                this Policy shall be governed by the laws of India.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsNCondition;
