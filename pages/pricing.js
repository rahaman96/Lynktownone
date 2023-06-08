import Layout from "../components/Layout/Layout";
import PriceHero from "../components/PricingPageHero/PriceHero";
import PriceList from "../components/PricingPageHero/PriceList";

export default function Pricing() {
  return (
    <>
      <Layout>
        <PriceHero />
        <div className="pb-10">
          <PriceList />
        </div>
      </Layout>
    </>
  );
}
