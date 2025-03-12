import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizData } from './quizData'
import {
  AnswerItem,
  AnswersList,
  FormTitle,
  FormWrapper,
  InputField,
  ProgressBar,
  ProgressDot,
  QuestionText,
  QuizTitle,
  QuizWrapper,
  SubmitButton,
} from './QuizContentStyled'
import QuizAnswer from '../quizAnswer/QuizAnswer'
import sendQuizResults from './emailService'

const QuizContent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])
  const [isRegistered, setIsRegistered] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    phone: '',
  })

  const handleAnswerClick = (index) => {
    if (isAnswered) return

    setSelectedAnswer(index)
    setIsAnswered(true)

    const currentQ = quizData[currentQuestion]
    const isCorrect = index === currentQ.correctAnswerIndex
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ.question,
        answer: currentQ.answers[index],
        result: isCorrect ? 'Да' : 'Нет',
      },
    ])

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
      } else {
        setQuizCompleted(true)
      }
    }, 1000)
  }

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    setIsRegistered(true)
    sendQuizResults(
      formData.email,
      formData.name,
      formData.surname,
      formData.phone,
      score,
      quizData.length,
      userAnswers
    )
  }

  return (
    <QuizWrapper>
      <QuizTitle>Квиз</QuizTitle>
      <>
        <AnimatePresence mode="wait">
          {quizCompleted ? (
            !isRegistered ? (
              <motion.div
                key="register-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <FormTitle>
                  Оставьте свою заявку для начала сотрудничества
                </FormTitle>
                <FormWrapper onSubmit={handleRegisterSubmit}>
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleRegisterChange}
                    required
                  />
                  <InputField
                    type="text"
                    name="surname"
                    placeholder="Фамилия"
                    value={formData.surname}
                    onChange={handleRegisterChange}
                    required
                  />
                  <InputField
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleRegisterChange}
                    required
                  />
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Введите ваш Email"
                    value={formData.email}
                    onChange={handleRegisterChange}
                    required
                  />
                  <SubmitButton type="submit">
                    Завершить регистрацию
                  </SubmitButton>
                </FormWrapper>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-answer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <QuizAnswer score={score} totalQuestions={quizData.length} />
              </motion.div>
            )
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
