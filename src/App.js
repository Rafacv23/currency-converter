import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Header from "./containers/header"
import ExchangeBox from "./containers/exchange-box"
import { getData, currency, secondCurrency } from "./data"

function App () {
  const [data, setData] = useState(null)
  const [currencies, setCurrencies] = useState("")
  const [secondCurrencies, setSecondCurrencies] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result.data)
        setPrice(result.jpyValue)
        console.log(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    setCurrencies(currency.toUpperCase())
    setSecondCurrencies(secondCurrency.toUpperCase())
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <ExchangeBox price={price} currencies={currencies} secondCurrencies={secondCurrencies} ></ExchangeBox>
    </div>
  )
}

export default App
