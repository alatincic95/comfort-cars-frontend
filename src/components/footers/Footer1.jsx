import { Link } from 'react-router-dom'

import { footerLinks1, footerLinks2, socialLinks } from '@/data/footer'

export default function Footer1() {
  return (
    <footer className="footer footer_type_1">
      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-1">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  width={112}
                  height={28}
                  alt="Comfort-Cars"
                  className="logo__image d-block"
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}
            <p className="footer-address">Kaštel Sućurac</p>

            <p className="m-0">
              <strong className="fw-medium">sale@comfort-cars.com</strong>
            </p>
            <p>
              <strong className="fw-medium">+1 246-345-0695</strong>
            </p>

            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__social-link d-block">
                    <svg
                      className={link.className}
                      width={link.width}
                      height={link.height}
                      viewBox={link.viewBox}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {typeof link.icon === 'string' ? (
                        <use href={link.icon} />
                      ) : (
                        link.icon
                      )}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Comfort Cars</h5>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks1.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link to={elm.href} className="menu-link menu-link_us-s">
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase">Shop</h5>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks2.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link to={elm.href} className="menu-link menu-link_us-s">
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="d-block d-md-flex align-items-center">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} Comfort-Cars
          </span>
          <div className="footer-settings d-block d-md-flex align-items-center"></div>
          {/* <!-- /.footer-settings --> */}
        </div>
        {/* <!-- /.d-flex --> */}
      </div>
      {/* <!-- /.footer-bottom container --> */}
    </footer>
  )
}
