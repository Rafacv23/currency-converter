import React, { useState, useEffect } from "react"
import CurrencyInputBox from "../components/currency-input-box"
import Btn from "../components/btn"
import CurrencyBox from "../components/currency-box"
import currencyInfo from "../currency-info"
import "../styles/exchange-box.css"

const ExchangeBox = ({ currencies, secondCurrencies, price, reverse, changeCurrency }) => {
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
            <CurrencyInputBox changeCurrency={changeCurrency} showData={showData} enableData={enableData} currencyData={currencyData} value={amount} onChange={getAmount} currencies={currencies}></CurrencyInputBox>
            <Btn className="reverse-btn" text="" onClick={() => reverse(currencies, secondCurrencies)}></Btn>
            <CurrencyBox currencyData={currencyData} showCurrencies={secondCurrencies} text={convertedAmount} currency={secondCurrencies}></CurrencyBox>
        </div>
  )
}

export default ExchangeBox
