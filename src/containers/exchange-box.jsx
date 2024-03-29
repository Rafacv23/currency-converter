import React, { useState, useEffect } from "react"
import CurrencyInputBox from "../components/currency-input-box"
import CurrencyInputBoxBelow from "../components/currency-input-box-below"
import Btn from "../components/btn"
import currencyInfo from "../currency-info"
import "../styles/exchange-box.css"
import "../styles/currency-box.css"

const ExchangeBox = ({ currencies, secondCurrencies, price, reverse, changeCurrency, setCurrencies }) => {
  const [amount, setAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencyData, setCurrencyData] = useState([])
  const [showData, setShowData] = useState(false)

  const getAmount = (event) => {
    const value = event.target.value
    setAmount(value)
  }

  const convert = (amount, rate) => {
    const convertRate = amount * rate
    setConvertedAmount(convertRate.toFixed(2))
  }

  useEffect(() => {
    convert(amount, price)
  })

  useEffect(() => {
    setCurrencyData(currencyInfo)
  }, [])

  const enableData = () => {
    setShowData(!showData)
  }

  return (
        <div>
            <CurrencyInputBox setCurrencies={setCurrencies} changeCurrency={changeCurrency} showData={showData} enableData={enableData} currencyData={currencyData} value={amount} onChange={getAmount} currencies={currencies}></CurrencyInputBox>
              <Btn className="reverse-btn hvr-outline-in" text="" onClick={() => reverse(currencies, secondCurrencies)}></Btn>
            <CurrencyInputBoxBelow setCurrencies={setCurrencies} changeCurrency={changeCurrency} showData={showData} enableData={enableData} currencyData={currencyData} convertedAmount={convertedAmount} onChange={getAmount} secondCurrencies={secondCurrencies}></CurrencyInputBoxBelow>
        </div>
  )
}

export default ExchangeBox
