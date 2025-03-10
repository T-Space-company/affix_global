import React from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../../header/components/logo/Logo'
import {
  FooterContactButtonTelegram,
  FooterContactButtonTelegramWhite,
  FooterContactButtonWhatsapp,
  FooterCopyright,
  FooterLegalItem,
  FooterLegalList,
  FooterNavButton,
} from '../FooterStyled'

import {
  FooterDextopContainer,
  FooterDextopTop,
  FooterDextopBottom,
  FooterNavList,
  FooterInputWrapper,
  FooterInput,
  FooterSubmitButton,
  FooterContactWrapper,
  LogoWrapp,
  FooterContactWrapperStyleBtn,
} from './FooterDextopStyled'

import useNavigateToContact from '../../../hooks/useNavigateToContact'
import TelegramWhiteIcon from '../../../assets/icons/TelegramWhiteIcon'
import WhatsappIcon from '../../../assets/icons/WhatsappIcon'
import TelegramIcon from '../../../assets/icons/TelegramIcon'
import { openTelegram, openWhatsApp } from '../../../hooks/useContactLinks'

const FooterDextop = () => {
  const redirectToContact = useNavigateToContact()
  const location = useLocation()
  console.log('====================================')
  console.log(location.pathname)
  console.log('====================================')
  const isContactPage = location.pathname === '/contact'

  return (
    <FooterDextopContainer>
      <FooterDextopTop>
        <LogoWrapp>
          <Logo />
        </LogoWrapp>

        <FooterLegalList>
          <FooterLegalItem>Политика конфиденциальности</FooterLegalItem>
        </FooterLegalList>
        <FooterCopyright>
          © 2025 Affix Global Все права защищены
        </FooterCopyright>
      </FooterDextopTop>

      <FooterDextopBottom>
        <FooterNavList>
          <FooterNavButton>Про нас</FooterNavButton>
          <FooterNavButton>Преимущества</FooterNavButton>
          <FooterNavButton>Блог</FooterNavButton>
          <FooterNavButton>Контакты</FooterNavButton>
          <FooterNavButton>FAQ</FooterNavButton>
        </FooterNavList>

        {!isContactPage && (
          <FooterInputWrapper>
            <FooterInput placeholder="Введите свой ник в Telegram" />
            <FooterSubmitButton onClick={redirectToContact}>
              Подать заявку сейчас
            </FooterSubmitButton>
          </FooterInputWrapper>
        )}

        {!isContactPage && (
          <FooterContactWrapper>
            <FooterContactWrapperStyleBtn>
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
                <span>Перейти в наш Telegram Bot</span>
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
            </FooterContactWrapperStyleBtn>

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
          </FooterContactWrapper>
        )}
      </FooterDextopBottom>
    </FooterDextopContainer>
  )
}

export default FooterDextop
