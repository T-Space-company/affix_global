import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_dk7z0eq'
const TEMPLATE_ID = 'template_91wyifm'
const PUBLIC_KEY = 'N1Pe7Nj7VlJ-kY-wc'

/**

 * @param {string} userEmail - Email 
 * @param {number} score - 
 * @param {number} totalQuestions - 
 */
const sendQuizResults = async (userEmail, score, totalQuestions) => {
  if (!userEmail) {
    console.error('❌ Email не вказано!')
    return
  }

  const quizMessage =
    score < 4
      ? 'Ти тільки починаєш свій шлях в аффіліатному маркетингу! 🔥'
      : score < 7
        ? 'Ти вже добре розбираєшся в аффіліатному маркетингу! 🚀'
        : 'Ти експерт у цій сфері! 🎯 Вітаємо!'

  const templateParams = {
    to_email: userEmail,
    score: `${score}/${totalQuestions}`,
    quiz_results: quizMessage,
    reply_to: 'no-reply@yourdomain.com',
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )
    console.log('✅ ', response.status, response.text)
  } catch (error) {
    console.error('❌ ', error)
  }
}

export default sendQuizResults
