import React from "react"

const Input = (props) => {
  return (
        <input className={props.className} onChange={props.onChange} value={props.value} min={props.min} max={props.max} type={props.type} placeholder={props.placeholder}>
        </input>
  )
}

export default Input
