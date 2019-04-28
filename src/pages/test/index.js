import React from 'react'

import Form from 'components/Form'
import FormItem from 'components/Form/FormItem'
import Input from 'components/Form/Input'

const test = () => {
  return (
    <div>
      <Form onSubmit={value => console.log(value, 'ffff')}>
        <Input field='smile' />
        <FormItem>
          <Input field='divinput1' />
          <Input field='divinput2' />
        </FormItem>
      </Form>
    </div>
  )
}

export default test
