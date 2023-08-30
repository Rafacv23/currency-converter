import React from "react"
import Input from "./input"
import Text from "./text"
import Btn from "./btn"
import "../styles/currency-input-box.css"

const CurrencyInputBox = ({
  setCurrencies,
  onChange,
  value,
  currencies,
  currencyData,
  showData,
  enableData,
  changeCurrency
}) => {
  const handleClick = (short) => {
    enableData()
    changeCurrency(short)
    console.log(short)
    setCurrencies(short)
  }

  const selectedCurrency = currencyData.find((currency) => currency.short === currencies)

  return (
    <div className="currencies-display">
      {showData ? (
        <>
          <Text text="Select your currency" />
          {currencyData.map((currency) => (
            <div key={currency.name}>
              <button className="change-currency-btn" onClick={() => handleClick(currency.short)} value={currency.short}>
                <img className="currencies-img" width="70px" src={currency.flag} alt={currency.name} />
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="display">
          {selectedCurrency && (
            <>
              <Text text={selectedCurrency.symbol} />
              <Input className="input" onChange={onChange} value={value} type="number" min={0} placeholder="Type quantity" />
              <Btn className="currency-btn" text={selectedCurrency.short.toUpperCase()} onClick={enableData}>
                <img width="40px" key={selectedCurrency.name.name} src={selectedCurrency.flag} />
              </Btn>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CurrencyInputBox
