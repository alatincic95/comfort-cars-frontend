import { Link } from 'react-router-dom'

import { useState } from 'react'
import { cars } from '@/data/products'

export default function PonudaVozila() {
  // eslint-disable-next-line no-unused-vars
  const [filtered] = useState(cars)

  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Ponuda Vozila
      </h2>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div className="row">
            {filtered.slice(0, 8).map((elm, i) => {
              console.log('CAR: ', elm)
              return (
                <div key={i} className="col-6 col-md-4 col-lg-3">
                  <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                    <div className="pc__img-wrapper">
                      <Link to={`/vozilo/${elm.id}`}>
                        <img
                          loading="lazy"
                          src={elm.pictures[0].url ?? ''}
                          width="330"
                          height="400"
                          alt={elm.title}
                          className="pc__img"
                        />
                        <img
                          loading="lazy"
                          src={elm.pictures[1].url ?? ''}
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
                      <div className="product-card__price d-flex align-items-center">
                        {!elm.oldPrice ? (
                          <span className="money price">${elm.price}</span>
                        ) : (
                          <>
                            <span className="money price price-old">
                              {elm.oldPrice}€
                            </span>
                            <span className="money price price-sale">
                              {elm.price}€
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    {elm.isNew && (
                      <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                        <div
                          className="pc-labels__left"
                          style={{ backgroundColor: 'green' }}
                        >
                          <span className="pc-label pc-label_new d-block text-white">
                            NOVO
                          </span>
                        </div>
                      </div>
                    )}
                    {elm.isIncoming && (
                      <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-end">
                        <div
                          className="pc-labels__left"
                          style={{ backgroundColor: 'blue' }}
                        >
                          <span className="pc-label pc-label_new d-block text-white">
                            U DOLASKU
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
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
  )
}
