import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 60px 20px 60px 20px;
`

export const FooterTop = styled.div``

export const FooterLogo = styled.div`
  width: 90px;
`

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FooterNavColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`

export const FooterNavButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  letter-spacing: 0.5px;
`

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: flex-start;
`

export const FooterContactButtonTelegram = styled.button`
  cursor: pointer;
  border: 1px solid #039be5;
  color: #039be5;
  background: transparent;
  border-radius: 100px;
  display: flex;
  height: 48px;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.07px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #039be5;
    color: white;
    box-shadow: 0px 4px 15px rgba(3, 155, 229, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 2px rgba(3, 155, 229, 0.8);
  }
`

export const FooterContactButtonTelegramWhite = styled.button`
  cursor: pointer;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  border-radius: 100px;
  display: flex;
  height: 48px;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.07px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #fff;
    color: black;
    box-shadow: 0px 4px 15px rgb(214 214 214 / 50%);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 2px rgb(214 214 214 / 50%);
  }
`

export const FooterContactButtonWhatsapp = styled.button`
  cursor: pointer;
  border: 1px solid #29a71a;
  color: #29a71a;
  background: transparent;
  border-radius: 100px;
  display: flex;
  height: 48px;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.07px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #29a71a;
    color: white;
    box-shadow: 0px 4px 15px rgba(41, 167, 26, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 2px rgba(41, 167, 26, 0.8);
  }
`

export const FooterContactIcon = styled.img``

export const FooterLegalList = styled.ul``

export const FooterLegalItem = styled.li``

export const FooterCopyright = styled.span``
