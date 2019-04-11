import { useEffect, useRef } from 'react'

const useDidUpdate = (callback, dependence) => {
  const init = useRef(true)
  useEffect(() => {
    if (init.current) {
      init.current = false
    } else {
      return callback()
    }
  }, dependence)
}

export default useDidUpdate
