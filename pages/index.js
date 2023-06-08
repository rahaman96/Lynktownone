import Layout from "../components/Layout/Layout";
import Heros from "../components/Heros/Hero";
import Advantage from "../components/Advantage/Advantage";
import Purchase from "../components/Purchase/Purchase";
import Seller from "../components/Seller/Seller";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <Layout>
      <Heros />
      <Seller />
      <Purchase />
      <Advantage />
    </Layout>
  );
}
