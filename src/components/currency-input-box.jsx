import React from "react"
import Input from "./input"
import Btn from "./btn"

const CurrencyInputBox = ({ setCurrencies, onChange, value, currencies, currencyData, showData, enableData, changeCurrency }) => {
  const handleClick = (short) => {
    enableData()
    changeCurrency(short)
    console.log(short)
    setCurrencies(short)
  }
  return (
        <div>
            {showData
              ? currencyData.map((currency) => (
                <ul key={currency.name}>
                  <button onClick={() => handleClick(currency.short)} value={currency.short}>
                    <img src={currency.flag} alt={currency.name}/>
                  </button>
              </ul>))
              : (<><Input onChange={onChange} value={value} type="number" min={0} placeholder="Type quantity"></Input>
            <Btn text={currencies.toUpperCase()} onClick={enableData}></Btn> </>)}

        </div>
  )
}

export default CurrencyInputBox
