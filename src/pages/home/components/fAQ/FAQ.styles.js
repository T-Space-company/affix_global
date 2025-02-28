import styled from 'styled-components'

export const FAQWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FAQWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 900px;
`

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const FAQTitle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  @media (min-width: 1280px) {
    font-size: 32px;
    line-height: 56px;
  }
`

export const FAQItem = styled.div`
  width: 100%;
`

export const FAQQuestion = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#1B1B1C')};
  color: ${({ isOpen }) => (isOpen ? '#1B1B1C' : '#fff')};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.16px;
  padding: 15px 20px;
  border-radius: 20px;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;
  min-height: 50px;

  ${({ isOpen }) =>
    isOpen &&
    `
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 28px;
  }
`

export const FAQAnswer = styled.div`
  background: #1b1b1c;
  padding: 15px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.07px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: 0.08px;
  }
`

export const ArrowIcon = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;

  img {
    overflow: hidden;
    width: 24px;
    height: 24px;
    transition: opacity 0.3s ease-in-out;
    /* opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)}; */
    filter: ${({ isOpen }) => (isOpen ? 'invert(1)' : 'invert(0)')};
  }
`
