import { useRef, useEffect } from 'react'

const useInterval = (callback, delay) => {
  const savedCallback = useRef()
  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback
  })
  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
