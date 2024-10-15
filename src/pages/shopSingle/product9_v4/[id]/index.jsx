import Footer1 from "@/components/footers/Footer1";

import Header24 from "@/components/headers/Header24";

import RelatedSlider from "@/components/singleProduct/RelatedSlider";


import { allProducts } from "@/data/products";
// e0e0e0;
import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
import VehicleTestComponent from "../../../../components/singleProduct/VehicleTestComponent";
const metadata = {
  title: "Shop Single 9 || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function ProductDetailsPage9() {
  let params = useParams();
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="header_dark">
        <Header24 />
      </div>
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <VehicleTestComponent product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
