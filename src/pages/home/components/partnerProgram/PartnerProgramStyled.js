import styled from 'styled-components'

export const PartnerProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row-reverse;
  }
`

export const PartnerProgramContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  max-width: 450px;
`

export const PartnerProgramTitle = styled.h2`
  color: #fff;

  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%; /* 31.2px */
  letter-spacing: 0.12px;

  @media (min-width: 1280px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 0.16px;
  }
`

export const PartnerProgramText = styled.p`
  color: #fff;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.08px;
  @media (min-width: 1280px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.08px;
  }
`

export const PartnerProgramButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.08px;
  border-radius: 100px;
  background: linear-gradient(135deg, #0044cc, #007bff);
  display: flex;
  height: 48px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  max-width: 250px;
  cursor: pointer;
  transition: all 0.5s ease-in-out; /* Подовжив час анімації */
  border: none;

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
