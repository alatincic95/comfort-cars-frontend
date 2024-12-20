import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Banner1 from "@/components/shoplist/Banner1";

import Shop9 from "@/components/shoplist/Shop9";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 9 || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function ShopPage9() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <Banner1 />
        <div className="mb-4 pb-lg-3"></div>
        <Shop9 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
