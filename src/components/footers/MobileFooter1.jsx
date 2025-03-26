import { useContextElement } from '@/context/Context'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MobileFooter1() {
  const [showFooter, setShowFooter] = useState(false)
  const { wishList } = useContextElement()
  useEffect(() => {
    setShowFooter(true)
  }, [])

  return (
    <footer
      className={`footer-mobile container w-100 px-5 d-md-none bg-body ${
        showFooter ? 'position-fixed footer-mobile_initialized' : ''
      }`}
    >
      <div className="row text-center">
        <div className="col-4">
          <Link
            to="/"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <svg
              className="d-block"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_home" />
            </svg>
            <span>Naslovnica</span>
          </Link>
        </div>
        {/* <!-- /.col-3 --> */}

        <div className="col-4">
          <Link
            to="/shop-1"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <svg
              className="d-block"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 10l1-2a2 2 0 0 1 2-1h12a2 2 0 0 1 2 1l1 2" />
              <circle cx="7" cy="16" r="2" />
              <circle cx="17" cy="16" r="2" />
              <path d="M5 16h14M3 10h18v4H3z" />
            </svg>
            <span>Ponuda</span>
          </Link>
        </div>
        {/* <!-- /.col-3 --> */}

        <div className="col-4">
          <Link
            to="/account_wishlist"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <div className="position-relative">
              <svg
                className="d-block"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_heart" />
              </svg>
              <span className="wishlist-amount d-block position-absolute js-wishlist-count">
                {wishList.length}
              </span>
            </div>
            <span>Favoriti</span>
          </Link>
        </div>
        {/* <!-- /.col-3 --> */}
      </div>
      {/* <!-- /.row --> */}
    </footer>
  )
}
