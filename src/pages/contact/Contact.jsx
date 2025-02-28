import { useMediaQuery } from 'react-responsive'
import {
  FooterContactButtonTelegram,
  FooterContactButtonTelegramWhite,
  FooterContactButtonWhatsapp,
  FooterContactIcon,
  FooterContacts,
} from '../../components/footer/FooterStyled'
import { ContainerPading } from '../../styles/GlobalStyles'
import ContactVideo from './components/contactVideo/ContactVideo'
import {
  ContactContant,
  ContactNavigate,
  ContactTitle,
  ContactTitleEmail,
  ContactWraper,
} from './ContactStyled'

import SVGTELEGRAM from '../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../assets/icons/svgWhatsapp.svg'
import {
  FooterInput,
  FooterInputWrapper,
  FooterSubmitButton,
} from '../../components/footer/footerDextop/FooterDextopStyled'
import useNavigateToContact from '../../hooks/useNavigateToContact'
import TelegramWhiteIcon from '../../assets/icons/TelegramWhiteIcon'
import WhatsappIcon from '../../assets/icons/WhatsappIcon'
import TelegramIcon from '../../assets/icons/TelegramIcon'

const Contact = () => {
  const redirectToContact = useNavigateToContact()
  const isDesktop = useMediaQuery({ minWidth: 1280 })

  return (
    <ContactWraper>
      <ContactVideo />
      <ContainerPading>
        <ContactContant>
          <ContactTitle>
            Вы можете связаться с нами любым способом ниже
          </ContactTitle>
          <ContactNavigate>
            <ContactTitleEmail>GLOBALAFFIX@mail.com</ContactTitleEmail>
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

            {isDesktop && (
              <FooterInputWrapper>
                <FooterInput placeholder="Введите свой ник в Telegram" />
                <FooterSubmitButton onClick={redirectToContact}>
                  Подать заявку сейчас
                </FooterSubmitButton>
              </FooterInputWrapper>
            )}
          </ContactNavigate>
        </ContactContant>
      </ContainerPading>
    </ContactWraper>
  )
}

export default Contact
