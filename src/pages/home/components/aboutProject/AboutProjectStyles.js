import styled from 'styled-components'

export const AboutProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    gap: 60px;
    /* padding: 60px; */
  }
`

export const AboutProjectImageWrapper = styled.div``

export const AboutProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media (min-width: 1280px) {
    gap: 40px;
    padding: 60px;
  }
`

export const AboutProjectTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: 0.12px;
  @media (min-width: 1280px) {
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    text-align: center;
  }
`

export const AboutProjectText = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.08px;
  @media (min-width: 1280px) {
    font-size: 18px;
    text-align: center;
  }
`

export const AboutProjectButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.08px;
  border-radius: 100px;
  background: linear-gradient(135deg, #0044cc, #007bff);
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  transition: all 0.5s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #fff;
    color: #0044cc;

    box-shadow: 0px 4px 15px rgba(0, 68, 204, 0.5);
    transition: all 0.5s ease-in-out;
  }

  &:active {
    transform: scale(0.96);
    transition: transform 0.2s ease-in-out;
  }
`
