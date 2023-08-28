import React from "react"
import Input from "./input"
import Btn from "./btn"

const CurrencyInputBox = ({ onChange, value, currencies }) => {
  return (
        <div>
            <Input onChange={onChange} value={value} type="number" min={0} placeholder="Type quantity"></Input>
            <Btn text={currencies}></Btn>
        </div>
  )
}

export default CurrencyInputBox
