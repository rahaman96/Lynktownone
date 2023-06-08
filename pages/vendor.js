import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import SellingSteps from "../components/SellingSteps/SellingSteps";
import CustomizedStore from "../components/CustomizedStore/CustomizedStore";
import ManageBusiness from "../components/ManageBusiness/ManageBusiness";
import Community from "../components/Community/Community";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import MadeFor from "../components/MadeFor";
import Faq from "../components/Faq";
import BlogSection from "../components/Blog/BlogSection";

export default function Vendor() {
  return (
    <Layout>
      <Hero />
      <SellingSteps />
      <CustomizedStore />
      <ManageBusiness />
      <Community />
      <Features />
      <Testimonial />
      <MadeFor />
      <Faq />
      <div className="pb-10 ">
        <BlogSection />
      </div>
    </Layout>
  );
}
