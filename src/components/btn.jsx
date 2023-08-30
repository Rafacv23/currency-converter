import React from "react"

const Btn = (props) => {
  return (
        <button className={props.className} onClick={props.onClick}>
            {props.text} {props.children}
        </button>
  )
}

export default Btn
