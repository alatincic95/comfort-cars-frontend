import { currencyOptions, languageOptions } from '@/data/footer'

import { socialLinks } from '@/data/socials'

import { useEffect, useState } from 'react'
import CartLength from './components/CartLength'
import { openCart } from '@/utlis/openCart'
import MobileNav from './components/MobileNav'

export default function MobileHeader() {
  const [scrollDirection, setScrollDirection] = useState('down')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection('down')
        } else {
          // Scrolling up
          setScrollDirection('up')
        }
      } else {
        // Below 250px
        setScrollDirection('down')
      }

      lastScrollY.current = currentScrollY
    }

    const lastScrollY = { current: window.scrollY }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`header-mobile header_sticky ${
        scrollDirection == 'up' ? 'header_sticky-active' : 'position-absolute'
      } `}
    >
      <div className="container d-flex align-items-center h-100">
        <a className="mobile-nav-activator d-block position-relative" href="#">
          <svg
            className="nav-icon"
            width="25"
            height="18"
            viewBox="0 0 25 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_nav" />
          </svg>
          <span className="btn-close-lg position-absolute top-0 start-0 w-100"></span>
        </a>

        <div className="logo">
          <a to="/">
            <img
              src="/assets/images/logo.png"
              width={112}
              height={28}
              alt="Comfort-Cars"
              className="logo__image d-block"
            />
          </a>
        </div>
        {/* <!-- /.logo --> */}

        <a
          onClick={() => openCart()}
          className="header-tools__item header-tools__cart js-open-aside"
        >
          <svg
            className="d-block"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_cart" />
          </svg>
          <span className="cart-amount d-block position-absolute js-cart-items-count">
            <CartLength />
          </span>
        </a>
      </div>
      {/* <!-- /.container --> */}

      <nav className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-field position-relative mt-4 mb-3"
          >
            <div className="position-absolute start-0 top-100 m-0 w-100">
              <div className="search-result"></div>
            </div>
          </form>
          {/* <!-- /.header-search --> */}
        </div>
        {/* <!-- /.container --> */}

        <div className="container">
          <div className="overflow-hidden">
            <ul className="navigation__list list-unstyled position-relative">
              <MobileNav />
            </ul>
            {/* <!-- /.navigation__list --> */}
          </div>
          {/* <!-- /.overflow-hidden --> */}
        </div>
        {/* <!-- /.container --> */}

        <div className="border-top mt-auto pb-2">
          <ul className="container social-links list-unstyled d-flex flex-wrap mb-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="footer__social-link d-block color-back"
                >
                  <svg
                    className={link.className}
                    width={link.width}
                    height={link.height}
                    viewBox={link.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href={link.icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <!-- /.navigation --> */}
    </div>
  )
}
