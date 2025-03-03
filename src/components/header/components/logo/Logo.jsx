import { Link } from 'react-router-dom'
import LogoTop from '../../../../assets/icons/logoTop.svg'
import LogoBottom from '../../../../assets/icons/logoBottom.svg'
import { LogoWrapp } from './LogoStyled'

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapp>
        <img src={LogoTop} alt="GlobalAffiX Logo" />
        <img src={LogoBottom} alt="GlobalAffiX Logo" />
      </LogoWrapp>
    </Link>
  )
}

export default Logo
