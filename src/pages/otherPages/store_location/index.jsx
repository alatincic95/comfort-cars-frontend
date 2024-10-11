import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import StoreLocator from "@/components/otherPages/StoreLocator";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Store Location || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function StoreLocationPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <StoreLocator />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
