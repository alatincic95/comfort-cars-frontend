import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/otherPages/Contact/Contact";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};

export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="contact-us container">
          <div className="mw-930">
            <h2 className="page-title">CONTACT US</h2>
          </div>
        </section>
     
        <Contact />
        <section className="google-map mb-5">
          <h2 className="d-none">Contact US</h2>
          <div id="map" className="google-map__wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23132.5119019116!2d16.41199544724969!3d43.553129900821496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355c3481e15743%3A0xa00ad52d0ae3620!2zS2HFoXRlbCBTdcSHdXJhYw!5e0!3m2!1sen!2shr!4v1728647603806!5m2!1sen!2shr"
              width="100%" // Make it responsive
              height="450"
              style={{ border: 0 }} // Use an object for styling
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
