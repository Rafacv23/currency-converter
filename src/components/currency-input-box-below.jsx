import React from "react"
import Text from "./text"
import Btn from "./btn"
import "../styles/currency-input-box.css"

const CurrencyInputBoxBelow = ({
  setCurrencies,
  onChange,
  value,
  secondCurrencies,
  currencyData,
  showData,
  enableData,
  changeCurrency,
  convertedAmount,
  secondSelectedCurrency // Agregamos secondSelectedCurrency como prop
}) => {
  const handleClick = (short) => {
    enableData()
    changeCurrency(short)
    console.log(short)
    setCurrencies(short)
  }

  const selectedCurrency = currencyData.find((currency) => currency.short === secondCurrencies)

  return (
    <div>
      {showData ? (
        currencyData.map((currency) => (
          <ul key={currency.name}>
            <button onClick={() => handleClick(currency.short)} value={currency.short}>
              <img src={currency.flag} alt={currency.name} />
            </button>
          </ul>
        ))
      ) : (
        <div className="display">
          {selectedCurrency && (
            <>
              <Text text={selectedCurrency.symbol}></Text>
              <Text className="input" text={convertedAmount} />

              <Btn className="currency-btn" text={selectedCurrency.short.toUpperCase()} onClick={enableData}>
                <img width="40px" key={selectedCurrency} src={selectedCurrency.flag} />
              </Btn>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CurrencyInputBoxBelow
