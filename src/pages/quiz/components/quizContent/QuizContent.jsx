import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizData } from './quizData'

import {
  AnswerItem,
  AnswersList,
  ProgressBar,
  ProgressDot,
  QuestionText,
  QuizTitle,
  QuizWrapper,
} from './QuizContentStyled'
import QuizAnswer from '../quizAnswer/QuizAnswer'
import sendQuizResults from './emailService'

const QuizContent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerClick = (index) => {
    if (isAnswered) return

    setSelectedAnswer(index)
    setIsAnswered(true)

    const isCorrect = index === quizData[currentQuestion].correctAnswerIndex
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
      } else {
        setQuizCompleted(true)
        sendQuizResults('00ntech@t-space.io', score, quizData.length)
      }
    }, 1000)
  }

  return (
    <QuizWrapper>
      <QuizTitle>Квиз</QuizTitle>
      <>
        <AnimatePresence mode="wait">
          {quizCompleted ? (
            <motion.div
              key="quiz-answer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <QuizAnswer score={score} totalQuestions={quizData.length} />
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProgressBar>
                {quizData.map((_, index) => (
                  <ProgressDot
                    key={index}
                    isActive={index <= currentQuestion}
                  />
                ))}
              </ProgressBar>
              <QuestionText>{quizData[currentQuestion].question}</QuestionText>
              <AnswersList>
                {quizData[currentQuestion].answers.map((answer, index) => (
                  <AnswerItem
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    isSelected={selectedAnswer === index}
                    isCorrect={
                      index === quizData[currentQuestion].correctAnswerIndex
                    }
                    isAnswered={isAnswered && selectedAnswer !== index}
                  >
                    {answer}
                  </AnswerItem>
                ))}
              </AnswersList>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </QuizWrapper>
  )
}

export default QuizContent
