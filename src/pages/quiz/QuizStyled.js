import styled from 'styled-components'

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  align-items: center;
  padding: 20px;
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`
