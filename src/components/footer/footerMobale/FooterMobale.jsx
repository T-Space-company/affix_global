import React from 'react'
import SVGTELEGRAM from '../../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../../assets/icons/svgWhatsapp.svg'

import SVGTELEGRAMWHITE from '../../../assets/icons/svgTelegramWhite.svg'
import Logo from '../../header/components/logo/Logo'

import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterNavColumn,
  FooterNavButton,
  FooterContacts,
  FooterContactIcon,
  FooterLegalList,
  FooterLegalItem,
  FooterCopyright,
  FooterContactButtonTelegram,
  FooterContactButtonWhatsapp,
  FooterContactButtonTelegramWhite,
} from '../FooterStyled'
import { useLocation } from 'react-router-dom'
import TelegramIcon from '../../../assets/icons/TelegramIcon'
import WhatsappIcon from '../../../assets/icons/WhatsappIcon'
import TelegramWhiteIcon from '../../../assets/icons/TelegramWhiteIcon'

const FooterMobale = () => {
  const location = useLocation()

  const isContactPage = location.pathname === '/contact'

  return (
    <FooterContainer>
      <FooterLogo>
        <Logo />
      </FooterLogo>
      <FooterNav>
        <FooterNavColumn>
          <FooterNavButton>Про нас</FooterNavButton>
          <FooterNavButton>Преимущества</FooterNavButton>
        </FooterNavColumn>
        <FooterNavColumn>
          <FooterNavButton>Блог</FooterNavButton>
          <FooterNavButton>Контакты</FooterNavButton>
          <FooterNavButton>FAQ</FooterNavButton>
        </FooterNavColumn>
      </FooterNav>

      {!isContactPage && (
        <FooterContacts>
          <FooterContactButtonTelegram
            onMouseEnter={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', 'white')
            }
            onMouseLeave={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', '#039BE5')
            }
          >
            <span>Перейти в наш Telegram Bot</span>
            <TelegramIcon color="#039BE5" />
          </FooterContactButtonTelegram>
          <FooterContactButtonWhatsapp
            onMouseEnter={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', 'white')
            }
            onMouseLeave={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', '#29A71A')
            }
          >
            <span>Написать нам в Whatsapp</span>
            <WhatsappIcon color="#29A71A" />
          </FooterContactButtonWhatsapp>

          <FooterContactButtonTelegramWhite
            onMouseEnter={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', 'black')
            }
            onMouseLeave={(e) =>
              e.currentTarget
                .querySelector('svg path')
                .setAttribute('fill', 'white')
            }
          >
            <span>Наша группа в телеграм</span>
            <TelegramWhiteIcon color="white" />
          </FooterContactButtonTelegramWhite>
        </FooterContacts>
      )}

      <FooterLegalList>
        <FooterLegalItem>Политика конфиденциальности</FooterLegalItem>
        {/* <FooterLegalItem>information Legal information Legal</FooterLegalItem>
        <FooterLegalItem>information Legal information Legal</FooterLegalItem>
        <FooterLegalItem>information Legal information</FooterLegalItem> */}
      </FooterLegalList>
      <FooterCopyright>© 2025 Affix Global Все права защищены</FooterCopyright>
    </FooterContainer>
  )
}

export default FooterMobale
