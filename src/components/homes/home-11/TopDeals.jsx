import Star from "@/components/common/Star";
import { products21 } from "@/data/products/electronics";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CountDownComponent2 from "@/components/common/CountDownComponent2";

export default function TopDeals() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 5,
    slidesPerGroup: 1,
    effect: "none",
    loop: false,
    navigation: {
      nextEl: "#product_hot_deals .products-carousel__next",
      prevEl: "#product_hot_deals .products-carousel__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: false,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 35,
        pagination: false,
      },
    },
  };
  return (
    <section className="products-carousel container">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap gap-3 mb-3 pb-xl-2 mb-xl-4">
        <h2 className="section-title fw-bold">Top Hot Deals</h2>
        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-medium"
          to="/shop-1"
        >
          See All Deals
        </Link>
      </div>
      <div id="product_hot_deals" className="position-relative">
        <Swiper
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {products21.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="swiper-slide product-card product-card_style8"
            >
              <div className="pc__img-wrapper pc__img-wrapper_wide2">
                <Link to={`/vozilo/${elm.id}`}>
                  <img
                    loading="lazy"
                    src={elm.imgSrc}
                    width="252"
                    height="229"
                    alt="image"
                    className="pc__img"
                  />
                </Link>
              </div>
              {/* <!-- /.pc__img-wrapper --> */}

              <div className="pc__info position-relative">
                <p className="pc__category">{elm.category}</p>
                <h6 className="pc__title">
                  <Link to={`/vozilo/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__review d-sm-flex align-items-center">
                  <div className="reviews-group d-flex">
                    <Star stars={elm.stars} />
                  </div>
                  <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                    {elm.reviews}
                  </span>
                </div>

                <div className="product-card__price d-flex mb-2">
                  <span className="money price fs-5">${elm.price}</span>
                </div>

                <div className="product-card__countdown">
                  <div className="text-secondary d-flex align-items-center gap-1 mb-1">
                    <span>Ends in</span>
                    <div
                      className="position-relative d-flex align-items-center text-center color-secondary js-countdown"
                      data-date="18-3-2024"
                      data-time="06:50"
                    >
                      <CountDownComponent2 />
                    </div>
                  </div>
                  <div className="progress progress_comfort-cars progress_comfort-cars_small mb-2">
                    <div
                      className="progress-bar theme-bg-color-secondary"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="text-secondary d-flex align-items-center justify-content-between gap-2">
                    <div>
                      Available:{" "}
                      <span className="text-primary">{elm.available}</span>
                    </div>
                    <div>
                      Already Sold:{" "}
                      <span className="text-primary">{elm.sold}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="cursor-pointer products-carousel__prev navigation-sm bg-grey-eeeeee position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__prev --> */}
        <div className="cursor-pointer products-carousel__next navigation-sm bg-grey-eeeeee position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__next --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
