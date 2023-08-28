import React, { useState, useEffect } from "react"
import CurrencyInputBox from "../components/currency-input-box"
import Btn from "../components/btn"
import CurrencyBox from "../components/currency-box"

const ExchangeBox = ({ currencies, secondCurrencies, price }) => {
  const [amount, setAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState(0)

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

  return (
        <div>
            <CurrencyInputBox value={amount} onChange={getAmount} currencies={currencies}></CurrencyInputBox>
            <Btn text="reverse"></Btn>
            <CurrencyBox text={convertedAmount} currency={secondCurrencies}></CurrencyBox>
        </div>
  )
}

export default ExchangeBox
