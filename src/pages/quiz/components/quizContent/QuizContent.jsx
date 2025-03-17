import React, { useState, useEffect } from 'react'
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

const LOCAL_STORAGE_KEY = 'quizProgress'

const QuizContent = () => {
  const savedProgress =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {}

  const [currentQuestion, setCurrentQuestion] = useState(
    savedProgress.currentQuestion || 0
  )
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(savedProgress.score || 0)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(
    savedProgress.quizCompleted || false
  )
  const [userAnswers, setUserAnswers] = useState(
    savedProgress.userAnswers || []
  )
  const [isRegistered, setIsRegistered] = useState(
    savedProgress.isRegistered || false
  )
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    phone: '',
  })

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        currentQuestion,
        score,
        quizCompleted,
        userAnswers,
        isRegistered,
      })
    )
  }, [currentQuestion, score, quizCompleted, userAnswers, isRegistered])

  const handleAnswerClick = (index) => {
    if (isAnswered || userAnswers[currentQuestion]) return

    setSelectedAnswer(index)
    setIsAnswered(true)

    const currentQ = quizData[currentQuestion]
    const isCorrect = index === currentQ.correctAnswerIndex
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    const updatedAnswers = [
      ...userAnswers,
      {
        question: currentQ.question,
        answer: currentQ.answers[index],
        correctAnswer: currentQ.answers[currentQ.correctAnswerIndex],
        result: isCorrect ? 'Да' : 'Нет',
      },
    ]
    setUserAnswers(updatedAnswers)

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
                    isAnswered={isAnswered || userAnswers[currentQuestion]}
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
