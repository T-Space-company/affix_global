import { Link } from 'react-router-dom'
import {
  DesktopHeaderButton,
  DesktopHeaderLink,
  DesktopHeaderNaw,
  DesktopHeaderWrapp,
} from './DesktopHeaderStyled'
import Logo from '../logo/Logo'
import useNavigateToContact from '../../../../hooks/useNavigateToContact'

const DesktopHeader = () => {
  const redirectToContact = useNavigateToContact()
  return (
    <DesktopHeaderWrapp className="desktop">
      <Logo />
      <DesktopHeaderNaw>
        <DesktopHeaderLink to="/">Про нас</DesktopHeaderLink>
        <DesktopHeaderLink to="/advantages">Преимущества</DesktopHeaderLink>
        <DesktopHeaderLink to="/blog">Блог</DesktopHeaderLink>
        <DesktopHeaderLink to="/contact">Контакты</DesktopHeaderLink>
        <DesktopHeaderLink to="/contact">FAQ</DesktopHeaderLink>
      </DesktopHeaderNaw>
      <DesktopHeaderButton onClick={redirectToContact}>
        Подать заявку сейчас
      </DesktopHeaderButton>
    </DesktopHeaderWrapp>
  )
}

export default DesktopHeader
