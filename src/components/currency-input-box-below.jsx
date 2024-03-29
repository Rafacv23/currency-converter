import React from "react"
import Text from "./text"
import Btn from "./btn"
import "../styles/currency-input-box.css"

const CurrencyInputBoxBelow = ({
  secondCurrencies,
  currencyData,
  convertedAmount

}) => {
  // eslint-disable-next-line no-lone-blocks
  { /*
    *TODO: Add this button to change the second currency
    const handleClick = (short) => {
    enableData()
    changeCurrency(short)
    console.log(short)
    setCurrencies(short)
  */ }

  const selectedCurrency = currencyData.find((currency) => currency.short === secondCurrencies)

  return (
    <>
        {selectedCurrency
          ? (<div className="display">
              <Text text={selectedCurrency.symbol}></Text>
              <Text className="input" text={convertedAmount} />
              <Btn className="currency-btn" text={selectedCurrency.short.toUpperCase()}>
                <img width="40px" key={selectedCurrency} src={selectedCurrency.flag} />
              </Btn>
            </div>)
          : ("Loading")}
    </>
  )
}

export default CurrencyInputBoxBelow
