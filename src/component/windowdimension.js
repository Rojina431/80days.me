import {useState, useEffect} from 'react'

function getWindowsDimensions() {
    const {innerWidth:width, innerHeight: height} = window
    
    return {
        width
    }
}

const useWindowsDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions())
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowsDimensions())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
   return windowDimensions
}

export default useWindowsDimensions