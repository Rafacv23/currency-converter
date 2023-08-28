import React from "react"
import Text from "../components/text"
import Btn from "../components/btn"
import "../styles/header.css"

const Header = () => {
  return (
        <header className="header">
            <Text text="Currency Converter"></Text>
            <Btn text="Config"></Btn>
        </header>
  )
}

export default Header
