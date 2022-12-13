import React from 'react'
import PropTypes from 'prop-types'

const Button = (Props) => {
  return (
      <button onClick={Props.onClick} className='btn' style={{backgroundColor:Props.color}}>{Props.text}</button>
  )
}
Button.defaultProps={
    color:"steelblue"
}
Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}
export default Button
