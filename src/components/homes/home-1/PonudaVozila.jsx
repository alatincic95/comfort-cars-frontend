import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
const filterCategories = ["All", "New Arrivals", "Best Seller", "Top Rated"];

import { useState } from "react";
import { cars } from "@/data/products";

export default function PonudaVozila() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  // eslint-disable-next-line no-unused-vars
  const [filtered] = useState(cars);


  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Ponuda <strong>Vozila</strong>
      </h2>

      <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center">
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
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div className="row">
            {filtered.slice(0, 8).map((elm, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                  <div className="pc__img-wrapper">
                    <Link to={`/vozilo/${elm.id}`}>
                      <img
                        loading="lazy"
                        src={elm.pictures[0].url ?? ""}
                        width="330"
                        height="400"
                        alt={elm.title}
                        className="pc__img"
                      />
                      <img
                        loading="lazy"
                        src={elm.pictures[1].url ?? ""}
                        width="330"
                        height="400"
                        className="pc__img pc__img-second"
                        alt="image"
                      />
                    </Link>
                  </div>

                  <div className="pc__info position-relative">
                    <h6 className="pc__title">
                      <Link to={`/vozilo/${elm.id}`}>{elm.title}</Link>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">${elm.price}</span>
                    </div>

                    <button
                      className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                        isAddedtoWishlist(elm.id) ? "active" : ""
                      }`}
                      title="Add To Wishlist"
                      onClick={() => toggleWishlist(elm.id)}
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
                </div>
              </div>
            ))}
          </div>
          {/* <!-- /.row --> */}
          <div className="text-center mt-2">
            <Link
              className="btn-link m-4 btn-link_lg default-underline text-uppercase fw-medium"
              to="/shop-1"
            >
              Otkrijte više
            </Link>
          </div>
        </div>

        {/* <!-- /.tab-pane fade show--> */}
      </div>
      {/* <!-- /.tab-content pt-2 --> */}
    </section>
  );
}
