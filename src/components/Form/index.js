import React, { useState, useEffect } from 'react'
import FormContext from './context'

const Form = ({ onSubmit: propsSubmit, children }) => {
  const [models, setmodals] = useState({})

  useEffect(() => {
    if (children) {
      const arr = React.Children.toArray(children)
      // 获取所有需要绑定的ItemDom
      let fieldItems = []
      arr.forEach(item => {
        const itemName = item.type.displayName
        if (itemName === 'ITEM') {
          fieldItems.push(item)
        }
        if (itemName === 'FORMITEM' && item.props.children) {
          const itemChildren = item.props.children
          if (Array.isArray(itemChildren)) {
            fieldItems = [
              ...fieldItems,
              ...itemChildren.filter(childrenItem => childrenItem.type.displayName === 'ITEM')
            ]
          } else {
            fieldItems = itemChildren.type.displayName === 'ITEM' && fieldItems.push(item)
          }
        }
      })
      // 获取整个models，收集item的props信息
      const newModels = {}
      fieldItems.forEach(item => {
        const { props } = item
        newModels[props.field] = { field: props.field, value: props.value }
      })
      setmodals(newModels)
    }
  }, [children])

  const changeModels = (name, value) => {
    setmodals({ ...models, [name]: { ...models[name], value } })
  }

  const onSubmit = () => {
    const values = {}
    for (const key in models) {
      if ({}.hasOwnProperty.call(models, key)) {
        values[key] = models[key].value
      }
    }
    if (propsSubmit) {
      propsSubmit(values)
    }
  }

  return (
    <div>
      <FormContext.Provider value={{ models, changeModels }}>
        {children}
        <button type="submit" onClick={onSubmit}>
          提交
        </button>
      </FormContext.Provider>
    </div>
  )
}

export default Form
