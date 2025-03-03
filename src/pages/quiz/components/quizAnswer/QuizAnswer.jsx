import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AnswerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  @media (min-width: 500px) {
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap: 30px;
    text-align: center;
  }
  @media (min-width: 500px) {
    align-items: flex-start;

    text-align: left;
  }
`

const ResultText = styled.span`
  color: #fff;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.1px;
  @media (min-width: 500px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`

const ScoreWrapper = styled.div``

const ScoreText = styled.span`
  color: #2b75dc;

  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.24px;
  @media (min-width: 500px) {
    font-size: 52px;
  }
  @media (min-width: 1200px) {
    font-size: 64px;
  }
`

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.08px;
  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`

const QuizAnswer = ({ score, totalQuestions }) => {
  let resultText = ''

  if (score <= 3) {
    resultText =
      'Ты только начинаешь свой путь в аффилиатном маркетинге, и это нормально! Разбирайся в источниках трафика, изучай офферы и оптимизируй свои кампании. Чем больше знаний, тем выше заработок!'
  } else if (score <= 6) {
    resultText =
      'Ты уже понимаешь, как работает аффилиатный маркетинг, умеешь запускать кампании и анализировать их эффективность. Осталось немного – подтянуть слабые места, протестировать новые подходы и масштабироваться!'
  } else {
    resultText =
      'Ты отлично разбираешься в трафике, знаешь, как конвертировать лиды и увеличивать ROI. CPA, EPC и CTR – для тебя не просто буквы, а инструменты роста! Продолжай в том же духе и увеличивай свой доход!'
  }

  return (
    <AnswerWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <ResultText>Ваш результат:</ResultText>
      <ScoreWrapper>
        <ScoreText>
          {score}/{totalQuestions}
        </ScoreText>
      </ScoreWrapper>
      <Description>{resultText}</Description>
    </AnswerWrapper>
  )
}

export default QuizAnswer
