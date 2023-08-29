import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Header from "./containers/header"
import ExchangeBox from "./containers/exchange-box"
import { getData } from "./data"

function App () {
  const [data, setData] = useState(null)
  const [currencies, setCurrencies] = useState("eur")
  const [secondCurrencies, setSecondCurrencies] = useState("jpy")
  const [price, setPrice] = useState("")

  const fetchData = async () => {
    try {
      const result = await getData(currencies, secondCurrencies)
      setData(result.data)
      setPrice(result.value)
      console.log(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const changeCurrency = async (currency) => {
    try {
      const result = await getData(currency, secondCurrencies)
      setData(result.data)
      setPrice(result.value)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currencies, secondCurrencies])

  const reverse = () => {
    const tempCurrency = currencies
    setCurrencies(secondCurrencies)
    setSecondCurrencies(tempCurrency)

    fetchData()
  }

  return (
    <div className="App">
      <Header></Header>
      <ExchangeBox setCurrencies={setCurrencies} changeCurrency={changeCurrency} price={price} reverse={reverse} currencies={currencies} secondCurrencies={secondCurrencies} data={data} ></ExchangeBox>
    </div>
  )
}

export default App
