import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 500px) {
    align-items: center;
    max-width: 500px;
    width: 100%;
    gap: 40px;
  }
  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`

export const QuizTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: 0.12px;
  @media (min-width: 500px) {
    font-size: 32px;
  }
`

export const ProgressBar = styled.ul`
  overflow: hidden;
  display: flex;
  gap: 6px;
  list-style: none;
  padding: 0;
  padding-bottom: 30px;
  @media (min-width: 500px) {
    padding-bottom: 40px;
  }
`

export const ProgressDot = styled.li`
  overflow: hidden;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
`

export const QuestionText = styled.p`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.09px;
  @media (min-width: 500px) {
    text-align: center;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    text-align: left;
  }
`

export const AnswersList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  padding-top: 30px;
  @media (min-width: 500px) {
    padding-top: 40px;
    gap: 30px;
  }
`

export const AnswerItem = styled(motion.li)`
  overflow: hidden;
  text-align: center;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 2px solid
    ${({ isSelected, isCorrect }) =>
      isSelected ? (isCorrect ? '#00C851' : '#ff4444') : '#fff'};
  cursor: ${({ isAnswered }) => (isAnswered ? 'default' : 'pointer')};
  color: #fff;
  background: ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? '#00C851' : '#ff4444') : 'transparent'};
  transition: all 0.3s ease-in-out;
  opacity: ${({ isAnswered, isSelected }) =>
    isAnswered && !isSelected ? 0.5 : 1};

  &:hover {
    ${({ isAnswered, isSelected }) =>
      !isAnswered &&
      !isSelected &&
      `
      background: white;
      color: black;
    `}
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #000;
  padding: 30px;
  border-radius: 12px;

  width: 100%;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`

export const InputField = styled.input`
  padding: 14px;
  background: #1e1e1e;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 2px solid #3a3a3a;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

export const SubmitButton = styled.button`
  padding: 10px;
  background: #2d74ff;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    background: #255dcc;
  }
`

export const PrivacyText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;

  a {
    color: #2d74ff;
    text-decoration: underline;
  }
`

export const FormTitle = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`
