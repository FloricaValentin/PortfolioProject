import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './Logo.scss'

const Logo = () => {
  const logoContainerRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const logoContainer = logoContainerRef.current
    const solidLogo = solidLogoRef.current

    if (logoContainer) {
      logoContainer.style.opacity = 1
    }

    if (solidLogo) {
      setTimeout(() => {
        solidLogo.style.opacity = 1
      }, 4000)
    }
  }, [])

  return (
    <div className="logo-container" ref={logoContainerRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  )
}

export default Logo
