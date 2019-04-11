import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Button } from 'antd'
import { useInterval } from './hooks'

const App = () => {
  const [time, setTime] = useState(60)

  useInterval(() => {
    if (time === 1) {
      setTime(60)
    } else {
      setTime(time - 1)
    }
  }, 1000)

  return (
    <div>
      {time}
      <Button>up</Button>
    </div>
  )
}

export default hot(App)
