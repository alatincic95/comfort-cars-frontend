import { homePages, shopList } from '@/data/menu'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Nav() {
  const { pathname } = useLocation()
  const isMenuActive = (menu) => {
    return menu.split('/')[1] == pathname.split('/')[1]
  }
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (menu) => menu.href.split('/')[1] == pathname.split('/')[1]
    )
  }
  useEffect(() => {
    function setBoxMenuPosition(menu) {
      const scrollBarWidth = 17
      const limitR = window.innerWidth - menu.offsetWidth - scrollBarWidth
      const limitL = 0
      const menuPaddingLeft = parseInt(
        window.getComputedStyle(menu, null).getPropertyValue('padding-left')
      )
      const parentPaddingLeft = parseInt(
        window
          .getComputedStyle(menu.previousElementSibling, null)
          .getPropertyValue('padding-left')
      )
      const centerPos =
        menu.previousElementSibling.offsetLeft -
        menuPaddingLeft +
        parentPaddingLeft

      let menuPos = centerPos
      if (centerPos < limitL) {
        menuPos = limitL
      } else if (centerPos > limitR) {
        menuPos = limitR
      }

      menu.style.left = `${menuPos}px`
    }
    document.querySelectorAll('.box-menu').forEach((el) => {
      setBoxMenuPosition(el)
    })
  }, [])
  return (
    <>
      <li className="navigation__item">
        <Link
          to={homePages[0].href}
          className={`navigation__link ${
            isMenuActive(homePages[0].href) ? 'menu-active' : ''
          }`}
        >
          {homePages[0].title}
        </Link>
      </li>
      <li className="navigation__item">
        <Link
          to="/shop-1"
          className={`navigation__link
           ${isActiveParentMenu(shopList) ? 'menu-active' : ''}
          `}
        >
          Ponuda
        </Link>
        {/* <div className="mega-menu">
          <div className="container d-flex">
            <div className="col pe-4">
              <a href="#" className="sub-menu__title">
                Shop List
              </a>
              <ul className="sub-menu__list list-unstyled">
                {shopList.map((elm, i) => (
                  <li key={i} className="sub-menu__item">
                    <Link
                      to={elm.href}
                      className={`menu-link menu-link_us-s ${
                        isMenuActive(elm.href) ? "menu-active" : ""
                      }`}
                    >
                      {elm.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="col pe-4">
              <a href="#" className="sub-menu__title">
                Other Pages
              </a>
              <ul className="sub-menu__list list-unstyled">
                {additionalShopPageitems.map((elm, i) => (
                  <li key={i} className="sub-menu__item">
                    <Link
                      to={elm.href}
                      className={`menu-link menu-link_us-s ${
                        isMenuActive(elm.href) ? "menu-active" : ""
                      }`}
                    >
                      {elm.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

         
          </div>
        </div> */}
      </li>

      <li className="navigation__item">
        <Link
          to="/about"
          className={`navigation__link ${
            pathname == '/about' ? 'menu-active' : ''
          }`}
        >
          O nama
        </Link>
      </li>
      <li className="navigation__item">
        <Link
          to="/contact"
          className={`navigation__link ${
            pathname == '/contact' ? 'menu-active' : ''
          }`}
        >
          Kontakt
        </Link>
      </li>
    </>
  )
}
