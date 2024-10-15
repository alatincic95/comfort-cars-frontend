import { useState } from "react";
import Slider4 from "./sliders/Slider4";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import ShareComponent from "../common/ShareComponent";
import { useContextElement } from "@/context/Context";
import testVehicle from "../../data/test-data/testVehicle.json"
import { PreviewItem } from "../test-components/PreviewItem";
export default function VehicleTestComponent({ product }) {
  const { cartProducts, setCartProducts } = useContextElement();
  const [quantity, setQuantity] = useState(1);

  console.log("Object.keys(testVehicle)",Object.keys(testVehicle))

  const isIncludeCard = () => {
    const item = cartProducts.filter((elm) => elm.id == product.id)[0];
    return item;
  };
  const setQuantityCartItem = (id, quantity) => {
    if (isIncludeCard()) {
      if (quantity >= 1) {
        const item = cartProducts.filter((elm) => elm.id == id)[0];
        const items = [...cartProducts];
        const itemIndex = items.indexOf(item);
        item.quantity = quantity;
        items[itemIndex] = item;
        setCartProducts(items);
      }
    } else {
      setQuantity(quantity - 1 ? quantity : 1);
    }
  };
  const addToCart = () => {
    if (!isIncludeCard()) {
      const item = product;
      item.quantity = quantity;
      setCartProducts((pre) => [...pre, item]);
    }
  };
  return (
    <section className="product-single container">
      <div className="row">
        <div className="col-lg-7">
          <Slider4 />
        </div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-between mb-4 pb-md-2">
       

          </div>
          <h1 className="product-single__name">{product.title}</h1>
          <div className="product-single__rating">
            <div className="reviews-group d-flex">
            </div>
          </div>
          <div className="product-single__price">
            <span className="current-price">${product.price}</span>
          </div>
          {Object.keys(testVehicle).map((key, i) => {
            if(key !== "opis" && key!== "fotografije"){
             return <PreviewItem key={i} title={key} description={testVehicle[key]}/>
            }
          })}
          <form onSubmit={(e) => e.preventDefault()}>
      
            <div className="product-single__addtocart">
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  value={isIncludeCard() ? isIncludeCard().quantity : quantity}
                  min="1"
                  onChange={(e) =>
                    setQuantityCartItem(product.id, e.target.value)
                  }
                  className="qty-control__number text-center"
                />
                <div
                  onClick={() =>
                    setQuantityCartItem(
                      product.id,
                      isIncludeCard()?.quantity - 1 || quantity - 1
                    )
                  }
                  className="qty-control__reduce"
                >
                  -
                </div>
                <div
                  onClick={() =>
                    setQuantityCartItem(
                      product.id,
                      isIncludeCard()?.quantity + 1 || quantity + 1
                    )
                  }
                  className="qty-control__increase"
                >
                  +
                </div>
              </div>
              {/* <!-- .qty-control --> */}
              <button
                type="submit"
                className="btn btn-primary btn-addtocart js-open-aside"
                onClick={() => addToCart()}
              >
                {isIncludeCard() ? "Already Added" : "Add to Cart"}
              </button>
            </div>
          </form>
          <div className="product-single__addtolinks">
            <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_heart" />
              </svg>
              <span>Add to Wishlist</span>
            </a>
            <ShareComponent title={product.title} />
          </div>
        </div>
      </div>
      <div className="product-single__details-tab m-0">
        <ul className="nav nav-tabs d-flex justify-content-start" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="tab-description-tab"
              data-bs-toggle="tab"
              href="#tab-description"
              role="tab"
              aria-controls="tab-description"
              aria-selected="true"
            >
              Opis
            </a>
          </li>
       
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="tab-description"
            role="tabpanel"
            aria-labelledby="tab-description-tab"
          >
                <div className="product-single__description">
     
      <p className="content">
      <p className="content">
  {testVehicle.opis.split('\n').map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ))}
</p>

      </p>
     
    </div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-additional-info"
            role="tabpanel"
            aria-labelledby="tab-additional-info-tab"
          >
            <AdditionalInfo />
          </div>
          <div
            className="tab-pane fade"
            id="tab-reviews"
            role="tabpanel"
            aria-labelledby="tab-reviews-tab"
          >
            <Reviews />
          </div>
        </div>
      </div>
    </section>
  );
}
