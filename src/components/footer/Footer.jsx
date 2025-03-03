import React, { useState, useEffect } from 'react'
import FooterMobale from './footerMobale/FooterMobale'
import FooterDextop from './footerDextop/FooterDextop'
import { FooterWrapper } from './FooterStyled'
import FooterTablet from './footerTablet/FooterTablet'

const Footer = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FooterWrapper>
      {screenSize < 600 ? (
        <FooterMobale />
      ) : screenSize >= 600 && screenSize < 1200 ? (
        <FooterTablet />
      ) : (
        <FooterDextop />
      )}
    </FooterWrapper>
  )
}

export default Footer
