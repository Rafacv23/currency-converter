import React from "react"

const Text = (props) => {
  return (
        <p className={props.className}>
            {props.text}
        </p>
  )
}

export default Text
