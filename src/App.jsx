/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Svgs from "@/components/common/Svgs";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";
import LoginFormPopup from "@/components/common/LoginFormPopup";

import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import SiteMap from "@/components/modals/SiteMap";
// import NewsLetter from "@/components/modals/NewsLetter";
import MobileHeader from "@/components/headers/MobileHeader";
import SizeGuide from "@/components/modals/SizeGuide";
import Delivery from "@/components/modals/Delivery";
import CustomerLogin from "@/components/asides/CustomerLogin";
import ShopFilter from "@/components/asides/ShopFilter";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductReviews from "@/components/asides/ProductReviews";
import MobileFooter1 from "@/components/footers/MobileFooter1";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage1 from "./pages/homes/home-1";
import ShopPage1 from "./pages/shoplist/shop-1";
import ProductDetailsPage9 from "./pages/shopSingle/product9_v4/[id]";
import ShopCartPage from "./pages/shop-cart-checkout/shop_cart";
import ShopCheckoutPage from "./pages/shop-cart-checkout/shop_checkout";
import ShopOrderConplate from "./pages/shop-cart-checkout/shop_order_complete";
import ShopOrderTrackingPage from "./pages/shop-cart-checkout/shop_order_tracking";
import BlogPage1 from "./pages/blogs/blog_list1";
import BlogPage2 from "./pages/blogs/blog_list2";
import BlogPage3 from "./pages/blogs/blog_list3";
import BlogDetailsPage from "./pages/blogs/blog_single/[id]";
import AccountPage from "./pages/dashboard/account_dashboard";
import LoginPage from "./pages/otherPages/login_register";
import StoreLocationPage from "./pages/otherPages/store_location";
import LookbookPage from "./pages/otherPages/lookbook";
import FaqPage from "./pages/otherPages/faq";
import TermsPage from "./pages/otherPages/terms";
import NotFound from "./pages/not-found";
import CommingSoonPage from "./pages/otherPages/coming_soon";
import AccountOrderPage from "./pages/dashboard/account_orders";
import AccountEditAddressPage from "./pages/dashboard/account_edit_address";
import AccountEditPage from "./pages/dashboard/account_edit";
import AccountWishlistPage from "./pages/dashboard/account_wishlist";
import ResetPasswordPage from "./pages/otherPages/reset_password";
import AboutPage from "./pages/otherPages/about";
import ContactPage from "./pages/otherPages/contact";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  return (
    <>
      <Svgs />
      <Context>
        <MobileHeader />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage1 />} />
            <Route path="home-1" element={<HomePage1 />} />
          

            <Route path="shop-1" element={<ShopPage1 />} />

            <Route path="product9_v4/:id" element={<ProductDetailsPage9 />} />

            <Route path="shop_cart" element={<ShopCartPage />} />
            <Route path="shop_checkout" element={<ShopCheckoutPage />} />
            <Route path="shop_order_complete" element={<ShopOrderConplate />} />
            <Route
              path="shop_order_tracking"
              element={<ShopOrderTrackingPage />}
            />
            <Route path="blog_list1" element={<BlogPage1 />} />
            <Route path="blog_list2" element={<BlogPage2 />} />
            <Route path="blog_list3" element={<BlogPage3 />} />
            <Route path="blog_single/:id" element={<BlogDetailsPage />} />

            <Route path="account_dashboard" element={<AccountPage />} />
            <Route path="login_register" element={<LoginPage />} />
            <Route path="store_location" element={<StoreLocationPage />} />
            <Route path="lookbook" element={<LookbookPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="page-not-found" element={<NotFound />} />
            <Route path="coming_soon" element={<CommingSoonPage />} />
            <Route path="account_orders" element={<AccountOrderPage />} />
            <Route
              path="account_edit_address"
              element={<AccountEditAddressPage />}
            />
            <Route path="account_edit" element={<AccountEditPage />} />
            <Route path="account_wishlist" element={<AccountWishlistPage />} />
            <Route path="reset_password" element={<ResetPasswordPage />} />

            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />

            <Route path="8" element={<NotFound />} />
          </Route>
        </Routes>

        <MobileFooter1 />
        {/* //modals and asides */}
        <LoginFormPopup />
        <QuickView />
        {/* <NewsLetter /> */}
        <SizeGuide />
        <Delivery />
        <CartDrawer />
        <SiteMap />
        <CustomerLogin />
        <ShopFilter />
        <ProductDescription />
        <ProductAdditionalInformation />
        <ProductReviews />
      </Context>
      <div className="page-overlay" id="pageOverlay"></div>
      <ScrollTop />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
