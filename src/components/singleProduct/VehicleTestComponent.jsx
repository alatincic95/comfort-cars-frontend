import Slider4 from "./sliders/Slider4";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import ShareComponent from "../common/ShareComponent";
import testVehicle from "../../data/test-data/testVehicle.json"
import { PreviewItem } from "../test-components/PreviewItem";
export default function VehicleTestComponent({ product }) {

  console.log("Object.keys(testVehicle)",Object.keys(testVehicle))



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
              <span className="my-2">Dodaj u favorite</span>
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
          <form onSubmit={(e) => e.preventDefault()}>
      
      <div className="contact-us__form">
      <form
        className="needs-validation"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            id="contact_us_name"
            placeholder="Name *"
            required
          />
          <label htmlFor="contact_us_name">Name *</label>
        </div>
        <div className="form-floating my-4">
          <input
            type="email"
            className="form-control"
            id="contact_us_email"
            placeholder="Email address *"
            required
          />
          <label htmlFor="contact_us_name">Email address *</label>
        </div>
        <div className="my-4">
          <textarea
            className="form-control form-control_gray"
            placeholder="Your Message"
            cols="30"
            rows="8"
            required
          ></textarea>
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-primary">
            Pošalji
          </button>
        </div>
      </form>
    </div>
      </form>
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
