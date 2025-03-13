import { useState, useEffect } from 'react'

const useMediaLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkIfLoaded = () => {
      if (document.readyState === 'complete') {
        setIsLoaded(true)
      }
    }

    if (document.readyState === 'complete') {
      setIsLoaded(true)
    } else {
      window.addEventListener('load', checkIfLoaded)
    }

    return () => window.removeEventListener('load', checkIfLoaded)
  }, [])

  return isLoaded
}

export default useMediaLoaded
