import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Header from "./containers/header"
import ExchangeBox from "./containers/exchange-box"
import { getData } from "./data"

function App () {
  const [data, setData] = useState(null)
  const [currencies, setCurrencies] = useState("")
  const [secondCurrencies, setSecondCurrencies] = useState("")
  const [price, setPrice] = useState("")

  const currency = "jpy"
  const secondCurrency = "eur"

  const changeCurrency = (currency) => {
    setCurrencies(currency)
  }

  const changeSecondCurrency = (secondCurrency) => {
    setSecondCurrencies(secondCurrency)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(currency, secondCurrency)
        setData(result.data)
        setPrice(result.value)
        console.log(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    setCurrencies(currency.toUpperCase())
    setSecondCurrencies(secondCurrency.toUpperCase())
  }, [])

  const reverse = (currency, secondCurrency) => {
    setSecondCurrencies(currency.toUpperCase())
    setCurrencies(secondCurrency.toUpperCase())
  }

  return (
    <div className="App">
      <Header></Header>
      <ExchangeBox changeSecondCurrency={changeSecondCurrency} changeCurrency={changeCurrency} price={price} reverse={reverse} currencies={currencies} secondCurrencies={secondCurrencies} data={data} ></ExchangeBox>
    </div>
  )
}

export default App
