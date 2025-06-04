import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'
import { slides1 } from '@/data/heroslides'

import { socialLinks } from '@/data/socials'
export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    modules: [Pagination, EffectFade],
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.slideshow-pagination',
      type: 'bullets',
      clickable: true,
    },
  }
  return (
    <Swiper
      style={{ maxWidth: '100%', overflow: 'hidden' }}
      className="swiper-container js-swiper-slider slideshow full-width_padding swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
      {...swiperOptions}
    >
      {' '}
      {slides1.map((elm, i) => (
        <SwiperSlide
          key={i}
          className="swiper-slide full-width_border border-1"
          style={{ borderColor: '#f5e6e0' }}
        >
          <div className="overflow-hidden position-relative h-100">
            {/* <div
              className="slideshow-bg"
              style={{ backgroundColor: '#f5e6e0' }}
            >
              <img
                loading="lazy"
                src={elm.characterImg}
                width="1761"
                height="778"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div> */}
            <div
              className="slideshow-bg"
              style={{ backgroundColor: '#f5e6e0' }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                width="100%"
                height="100%"
                poster={elm.posterImg} // optional, if you have a poster image
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              >
                <source src={elm.videoSrc} type="video/mp4" />
                {elm.characterAlt}
              </video>
            </div>

            {/* <!-- <p className="slideshow_markup font-special text-uppercase position-absolute end-0 bottom-0">Summer</p> --> */}
            <div className="slideshow-character position-absolute bottom-0 pos_right-center"></div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase text-red fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                {elm.text1}
              </h6>
              <h2 className="text-uppercase h1 fw-bold mb-0 animate animate_fade animate_btt animate_delay-5">
                {elm.text2}
              </h2>
              {elm.text3 ? (
                <h2 className="text-uppercase h1 fw-bold animate animate_fade animate_btt animate_delay-5">
                  {elm.text3}
                </h2>
              ) : (
                ''
              )}
              {elm.text4 ? (
                <h6 className="text-uppercase mb-5 animate animate_fade animate_btt animate_delay-3">
                  {elm.text4}
                </h6>
              ) : (
                ''
              )}
              <Link
                to="/shop-1"
                className="btn-link m-2 btn-link_lg default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
              >
                Otkrijte više
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="container">
        <div className="slideshow-pagination d-flex align-items-center position-absolute bottom-0 mb-5"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.container --> */}
      <div className="slideshow-social-follow d-none d-xxl-block position-absolute top-50 start-0 translate-middle-y text-center">
        <ul className="social-links list-unstyled mb-0 text-black">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="footer__social-link d-block color-black"
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
        {/* <!-- /.social-links list-unstyled mb-0 text-secondary --> */}
        <span className="slideshow-social-follow__title d-block mt-5 text-uppercase fw-medium text-black">
          Follow Us
        </span>
      </div>
    </Swiper>
  )
}
