import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import Shop4 from "@/components/shoplist/Shop4";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop 4 || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function ShopPage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <Shop4 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
