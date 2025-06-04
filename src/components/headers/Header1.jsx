import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'

export default function Header1() {
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
    <header
      id="header"
      className={`header header_sticky ${
        scrollDirection == 'up' ? 'header_sticky-active' : 'position-absolute'
      } `}
    >
      <div className="container">
        <div className="header-desk header-desk_type_1">
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

          <nav className="navigation">
            <ul className="navigation__list list-unstyled d-flex">
              <Nav />
            </ul>
            {/* <!-- /.navigation__list --> */}
          </nav>
          {/* <!-- /.navigation --> */}
        </div>
      </div>
    </header>
  )
}
