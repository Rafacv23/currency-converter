import React from "react"
import Text from "./text"
import Btn from "./btn"

const CurrencyBox = (props) => {
  return (
        <div>
            <Text text={props.text}></Text>
            <Btn text={props.currency}></Btn>
        </div>
  )
}

export default CurrencyBox
