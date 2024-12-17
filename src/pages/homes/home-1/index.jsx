import LoginFormPopup from "@/components/common/LoginFormPopup";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/home-1/Hero";
import InstaGram from "@/components/homes/home-1/InstaGram";
import Products2 from "@/components/homes/home-1/Products2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 1 || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div>
        <Header1 />
        <main className="page-wrapper">
          <Hero />
          <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5"></div>
          <div className="pb-1"></div>
          {/* <Products1 /> */}
          <div className="mb-4 pb-4 mb-xl-5 pb-xl-5"></div>
          <Products2 />
          <div className="mt-4">
          </div>
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
          <div className="bg-white">
            <Features />{" "}
          </div>
        </main>
        <Footer1 />
        <LoginFormPopup />{" "}
      </div>
    </>
  );
}
