import React from "react"
import Text from "../components/text"
import "../styles/App.css"

const Footer = () => {
  return (
        <footer className="footer-btn hvr-rectangle-out">
            <a href="https://github.com/Rafacv23/currency-converter" target="_blank" rel="noopener noreferrer">
                <Text text="Made with ❤️ by Rafa Canosa"></Text>
            </a>
        </footer>
  )
}

export default Footer
