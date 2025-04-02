import React from 'react'
import Logo from '../../header/components/logo/Logo'

import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterNavColumn,
  FooterNavButton,
  FooterContacts,
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
import {
  openTelegram,
  openTelegramBot,
  openWhatsApp,
} from '../../../hooks/useContactLinks'

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
          <FooterNavButton to="/">Про нас</FooterNavButton>
          {/* <FooterNavButton to="/advantages">Преимущества</FooterNavButton> */}
        </FooterNavColumn>
        <FooterNavColumn>
          <FooterNavButton to="/blog">Блог</FooterNavButton>
          <FooterNavButton to="/contact">Контакты</FooterNavButton>
          <FooterNavButton to="/faq">FAQ</FooterNavButton>
        </FooterNavColumn>
      </FooterNav>

      {!isContactPage && (
        <FooterContacts>
          <FooterContactButtonTelegram
            onClick={openTelegramBot}
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
          <FooterContactButtonTelegram
            onClick={openTelegram}
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
            <span>Написать нам в Telegram</span>
            <TelegramIcon color="#039BE5" />
          </FooterContactButtonTelegram>
          <FooterContactButtonWhatsapp
            onClick={openWhatsApp}
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
            onClick={openTelegram}
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
      </FooterLegalList>
      <FooterCopyright>© 2025 Affix Global Все права защищены</FooterCopyright>
    </FooterContainer>
  )
}

export default FooterMobale
