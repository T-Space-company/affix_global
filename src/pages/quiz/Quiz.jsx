import QuizContent from './components/quizContent/QuizContent'
import QuizVideo from './components/quizVideo/QuizVideo'
import { QuizWrapper } from './QuizStyled'

const Quiz = () => {
  return (
    <QuizWrapper>
      <QuizVideo />
      <QuizContent />
    </QuizWrapper>
  )
}

export default Quiz
