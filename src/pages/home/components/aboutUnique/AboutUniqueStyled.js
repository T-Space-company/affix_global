import styled from 'styled-components'

export const AboutUniqueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const AboutUniqueContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const AboutUniqueTitle = styled.h2`
  color: #fff;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1280px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }
`

export const AboutUniqueList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;

  width: 100%;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`

export const AboutUniqueItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background: #1b1b1c;
`

export const AboutUniqueIcon = styled.img``

export const AboutUniqueItemTitle = styled.h3`
  color: #eaf1ff;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1280px) {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
  }
`

export const AboutUniqueText = styled.p`
  color: #c9c6c6;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 1280px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`
