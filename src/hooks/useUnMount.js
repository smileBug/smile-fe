import { useEffect } from 'react'

const useUnMount = callback => {
  useEffect(() => callback, [])
}

export default useUnMount
