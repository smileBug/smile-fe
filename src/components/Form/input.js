import React, { useContext } from 'react'
import FormContext from './context'

const Input = ({field}) => {
  const context = useContext(FormContext)
  const onChange = e => {
    context.changeModels(field, e.target.value)
  }
  return (
    <input onChange={onChange} />
  )
}
Input.displayName = 'ITEM'
export default Input
