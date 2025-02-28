import styled from 'styled-components'

export const FooterDextopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 40px 80px 40px;
  border-top: 1px solid #303031;
  backdrop-filter: blur(50px);
  width: 100%;
  justify-content: space-around;
  margin-top: 100px;
`

export const LogoWrapp = styled.div`
  width: 90px;
`

export const FooterContactWrapperStyleBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const FooterDextopTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const FooterDextopBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 40px;
`

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FooterNavItem = styled.li``

export const FooterInputWrapper = styled.div`
  position: relative;
`

export const FooterInput = styled.input`
  width: 100%;
  border-radius: 20px;
  background: #1b1b1c;
  height: 50px;
  border: none;
  padding: 10px 280px 10px 30px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #fff;
  outline: none;
`

export const FooterSubmitButton = styled.button`
  height: 50px;
  width: 250px;
  border-radius: 20px;
  background: linear-gradient(135deg, #2b75dc, #1a4bb7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.08px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(43, 117, 220, 0.4);

  &:hover {
    background: linear-gradient(135deg, #1a4bb7, #2b75dc);
    box-shadow: 0px 6px 15px rgba(43, 117, 220, 0.6);
  }

  &:focus {
    outline: none;
    background: linear-gradient(135deg, #2b75dc, #4c8df3);
    box-shadow: 0px 6px 15px rgba(43, 117, 220, 0.8);
  }
`

export const FooterContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
`
