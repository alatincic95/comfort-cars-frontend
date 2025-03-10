import { useContextElement } from "@/context/Context";
import { products2 } from "@/data/products/fashion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const filterCategories = ["Jeans", "Bags", "Accessories"];

export default function Products() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [filtered, setFiltered] = useState(products2);
  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products2);
    } else {
      setFiltered([
        ...products2.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory]);
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    effect: "none",
    loop: false,
    pagination: {
      el: ".products-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-carousel__next",
      prevEl: ".products-carousel__prev",
    },
    modules: [Navigation, Pagination, Autoplay],
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
    },
  };
  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Best Selling
      </h2>

      <ul className="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center">
        {filterCategories.map((elm, i) => (
          <li
            onClick={() => setCurrentCategory(elm)}
            key={i}
            className="nav-item"
            role="presentation"
          >
            <a
              className={`nav-link nav-link_underscore ${
                currentCategory == elm ? "active" : ""
              }`}
            >
              {elm}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div className="tab-pane fade show active">
          <div className="position-relative">
            <Swiper
              {...swiperOptions}
              className="swiper-container js-swiper-slider"
            >
              {filtered.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <Link to={`/vozilo/${elm.id}`}>
                      <img
                        loading="lazy"
                        src={elm.imgSrc}
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                      <img
                        loading="lazy"
                        src={elm.imgSrc2}
                        width="330"
                        height="400"
                        alt="Cropped Faux leather Jacket"
                        className="pc__img pc__img-second"
                      />
                    </Link>
                    {elm.isNew && (
                      <div className="product-label bg-white">NEW</div>
                    )}
                    {elm.discount && (
                      <div className="product-label bg-red text-white">
                        {elm.discount}%
                      </div>
                    )}
                    <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                      <button
                        className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                        onClick={() => addProductToCart(elm.id)}
                        title={
                          isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add to Cart"
                        }
                      >
                        {isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </button>
                      <button
                        className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickViewItem(elm)}
                        title="Quick view"
                      >
                        Quick View
                      </button>
                    </div>
                    <button
                      className={`pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist ${
                        isAddedtoWishlist(elm.id) ? "active" : ""
                      }`}
                      onClick={() => toggleWishlist(elm.id)}
                      title="Add To Wishlist"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_heart" />
                      </svg>
                    </button>
                  </div>

                  <div className="pc__info position-relative">
                    <p className="pc__category third-color">{elm.category}</p>
                    <h6 className="pc__title">
                      <Link to={`/vozilo/${elm.id}`}>{elm.title}</Link>
                    </h6>
                    <div className="product-card__price d-flex align-items-center">
                      {elm.priceOld && (
                        <span className="money price-old">${elm.priceOld}</span>
                      )}
                      <span className="money price">${elm.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* <!-- /.swiper-wrapper --> */}
            </Swiper>
            {/* <!-- /.swiper-container js-swiper-slider --> */}

            <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
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
            <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
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

            <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
            {/* <!-- /.products-pagination --> */}
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
      </div>
      {/* <!-- /.tab-content pt-2 --> */}
    </section>
  );
}
