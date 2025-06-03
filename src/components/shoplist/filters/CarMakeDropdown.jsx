import { useState, useEffect } from 'react'

const brands = [
  'Toyota',
  'Volkswagen',
  'Honda',
  'Ford',
  'Hyundai',
  'Nissan',
  'Chevrolet',
  'Kia',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Tesla',
  'Renault',
  'Fiat',
  'Mazda',
  'Peugeot',
  'Jeep',
  'Subaru',
  'Lexus',
  'Porsche',
  'Jaguar',
  'Land Rover',
  'Mitsubishi',
  'Volvo',
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1979 }, (_, i) =>
  (1980 + i).toString()
)

const CarBrandModelSelector = ({
  onBrandSelect,
  onModelSelect,
  onYearFromSelect,
  onYearToSelect,
  onPriceFromChange,
  onPriceToChange,
  onSearch,
}) => {
  const [brandQuery, setBrandQuery] = useState('')
  const [isBrandDropdownActive, setIsBrandDropdownActive] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [modelQuery, setModelQuery] = useState('')
  const [isModelDropdownActive, setIsModelDropdownActive] = useState(false)
  const [models, setModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('')
  const [loadingModels, setLoadingModels] = useState(false)
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(brandQuery.toLowerCase())
  )

  useEffect(() => {
    if (!selectedBrand) {
      setModels([])
      setModelQuery('')
      setSelectedModel('')
      return
    }
    setLoadingModels(true)
    fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&rows=1000&refine.make=${encodeURIComponent(
        selectedBrand
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        const uniqueModels = [
          ...new Set(data.records.map((r) => r.fields.model)),
        ].sort((a, b) => a.localeCompare(b))
        setModels(uniqueModels)
        setLoadingModels(false)
      })
      .catch(() => {
        setModels([])
        setLoadingModels(false)
      })
  }, [selectedBrand])

  const filteredModels = models.filter((model) =>
    model.toLowerCase().includes(modelQuery.toLowerCase())
  )

  const yearsFromOptions = yearTo
    ? years.filter((y) => parseInt(y) <= parseInt(yearTo))
    : years
  const yearsToOptions = yearFrom
    ? years.filter((y) => parseInt(y) >= parseInt(yearFrom))
    : years

  const handlePriceFromChange = (val) => {
    setPriceFrom(val)
    if (priceTo && Number(val) > Number(priceTo)) {
      setPriceTo(val)
      if (onPriceToChange) onPriceToChange(val)
    }
    if (onPriceFromChange) onPriceFromChange(val)
  }
  const handlePriceToChange = (val) => {
    setPriceTo(val)
    if (priceFrom && Number(val) > Number(val)) {
      setPriceFrom(val)
      if (onPriceFromChange) onPriceFromChange(val)
    }
    if (onPriceToChange) onPriceToChange(val)
  }

  const handleYearFromChange = (val) => {
    setYearFrom(val)
    if (yearTo && parseInt(val) > parseInt(yearTo)) {
      setYearTo(val)
      if (onYearToSelect) onYearToSelect(val)
    }
    if (onYearFromSelect) onYearFromSelect(val)
  }
  const handleYearToChange = (val) => {
    setYearTo(val)
    if (yearFrom && parseInt(val) < parseInt(yearFrom)) {
      setYearFrom(val)
      if (onYearFromSelect) onYearFromSelect(val)
    }
    if (onYearToSelect) onYearToSelect(val)
  }

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        brand: selectedBrand,
        model: selectedModel,
        yearFrom,
        yearTo,
        priceFrom,
        priceTo,
      })
    }
  }

  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <style>
        {`
        .car-filter-row {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
        }
        .car-filter-item {
          flex: 1 1 0;
          min-width: 0;
        }
        .car-filter-item input,
        .car-filter-item select {
          width: 100%;
        }
        @media (max-width: 900px) {
          .car-filter-row {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 8px;
          }
        }
        .car-filter-search-btn-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 8px;
        }
        @media (max-width: 900px) {
          .car-filter-search-btn-row {
            justify-content: stretch;
          }
          .car-filter-search-btn-row button {
            width: 100%;
          }
        }
        `}
      </style>
      {/* First row: Brand & Model */}
      <div className="car-filter-row">
        {/* Brand Search Dropdown */}
        <div className="car-filter-item" style={{ position: 'relative' }}>
          <label className="form-label mb-1">Proizvođač</label>
          <div className="search-field__input-wrapper">
            <input
              type="text"
              className="search-field__input form-control form-control-sm"
              placeholder="Pretraži proizvođača"
              value={brandQuery}
              onFocus={() => setIsBrandDropdownActive(true)}
              onBlur={() =>
                setTimeout(() => setIsBrandDropdownActive(false), 150)
              }
              onChange={(e) => {
                setBrandQuery(e.target.value)
                setIsBrandDropdownActive(true)
              }}
            />
          </div>
          {isBrandDropdownActive && (
            <ul
              className="search-suggestion list-unstyled"
              style={{
                position: 'absolute',
                zIndex: 10,
                background: '#fff',
                width: '100%',
                border: '1px solid #eee',
                maxHeight: 200,
                overflowY: 'auto',
              }}
            >
              {filteredBrands.length === 0 && (
                <li
                  className="search-suggestion__item js-search-select"
                  style={{ padding: 8, color: '#888' }}
                >
                  No results
                </li>
              )}
              {filteredBrands.map((brand, i) => (
                <li
                  onClick={() => {
                    setSelectedBrand(brand)
                    setBrandQuery(brand)
                    setIsBrandDropdownActive(false)
                    setSelectedModel('')
                    setModelQuery('')
                    if (onBrandSelect) onBrandSelect(brand)
                  }}
                  key={i}
                  className="search-suggestion__item js-search-select"
                  style={{
                    padding: 8,
                    cursor: 'pointer',
                    background: selectedBrand === brand ? '#f0f0f0' : '#fff',
                  }}
                >
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Model Search Dropdown */}
        <div className="car-filter-item" style={{ position: 'relative' }}>
          <label className="form-label mb-1">Model</label>
          <div className="search-field__input-wrapper">
            <input
              type="text"
              className="search-field__input form-control form-control-sm"
              placeholder={loadingModels ? 'Učitavanje...' : 'Pretraži model'}
              value={modelQuery}
              disabled={!selectedBrand || loadingModels}
              onFocus={() => setIsModelDropdownActive(true)}
              onBlur={() =>
                setTimeout(() => setIsModelDropdownActive(false), 150)
              }
              onChange={(e) => {
                setModelQuery(e.target.value)
                setIsModelDropdownActive(true)
              }}
            />
          </div>
          {isModelDropdownActive && (
            <ul
              className="search-suggestion list-unstyled"
              style={{
                position: 'absolute',
                zIndex: 10,
                background: '#fff',
                width: '100%',
                border: '1px solid #eee',
                maxHeight: 200,
                overflowY: 'auto',
              }}
            >
              {!loadingModels && filteredModels.length === 0 && (
                <li
                  className="search-suggestion__item js-search-select"
                  style={{ padding: 8, color: '#888' }}
                >
                  No results
                </li>
              )}
              {filteredModels.map((model, i) => (
                <li
                  onClick={() => {
                    setSelectedModel(model)
                    setModelQuery(model)
                    setIsModelDropdownActive(false)
                    if (onModelSelect) onModelSelect(model)
                  }}
                  key={i}
                  className="search-suggestion__item js-search-select"
                  style={{
                    padding: 8,
                    cursor: 'pointer',
                    background: selectedModel === model ? '#f0f0f0' : '#fff',
                  }}
                >
                  {model}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Second row: Years and Prices */}
      <div className="car-filter-row">
        {/* Year From Dropdown */}
        <div className="car-filter-item">
          <label className="form-label mb-1">Od</label>
          <select
            className="form-select form-select-sm"
            value={yearFrom}
            onChange={(e) => handleYearFromChange(e.target.value)}
          >
            <option value="">{'Godina'}</option>
            {yearsFromOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        {/* Year To Dropdown */}
        <div className="car-filter-item">
          <label className="form-label mb-1">Do</label>
          <select
            className="form-select form-select-sm"
            value={yearTo}
            onChange={(e) => handleYearToChange(e.target.value)}
          >
            <option value="">{'Godina'}</option>
            {yearsToOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        {/* Price From Input */}
        <div className="car-filter-item">
          <label className="form-label mb-1">Cijena od (€)</label>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="€"
            min="0"
            value={priceFrom}
            onChange={(e) => handlePriceFromChange(e.target.value)}
          />
        </div>
        {/* Price To Input */}
        <div className="car-filter-item">
          <label className="form-label mb-1">Cijena do (€)</label>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="€"
            min="0"
            value={priceTo}
            onChange={(e) => handlePriceToChange(e.target.value)}
          />
        </div>
      </div>
      {/* Search Button Row */}
      <div className="car-filter-search-btn-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Pretraži
        </button>
      </div>
    </div>
  )
}

export default CarBrandModelSelector
