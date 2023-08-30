import React from "react"
import Input from "./input"
import Text from "./text"
import Btn from "./btn"
import "../styles/currency-input-box.css"

const CurrencyInputBox = ({ setCurrencies, onChange, value, currencies, currencyData, showData, enableData, changeCurrency }) => {
  const handleClick = (short) => {
    enableData()
    changeCurrency(short)
    console.log(short)
    setCurrencies(short)
  }

  const selectedCurrency = currencyData.find((currency) => currency.short === currencies)

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
              <Input className="input" onChange={onChange} value={value} type="number" min={0} placeholder="Type quantity" />
              <Btn className="currency-btn" text={selectedCurrency.short.toUpperCase()} onClick={enableData}>
                <img width="40px" key={selectedCurrency.name.name} src={selectedCurrency.flag}/>
              </Btn>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CurrencyInputBox
