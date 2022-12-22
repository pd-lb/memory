import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

const getViewportSize = () => {
  const { innerWidth: width, innerHeight: height } = window
  const vmin = Math.min(width, height)

  return { width, height, vmin }
}

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState(getViewportSize())

  useEffect(() => {
    const handleResize = () => {
      setViewportSize(getViewportSize())
    }
    const handleResizeWithDebounce = debounce(handleResize, 100)
    window.addEventListener('resize', handleResizeWithDebounce)

    return () => window.removeEventListener('resize', handleResizeWithDebounce)
  }, [])

  return viewportSize
}
