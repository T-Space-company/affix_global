import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_dk7z0eq'
const TEMPLATE_ID = 'template_91wyifm'
const PUBLIC_KEY = 'N1Pe7Nj7VlJ-kY-wc'

/**
 * Відправка результатів опитування через EmailJS
 * @param {string} userEmail - Email користувача
 * @param {string} userName - Ім'я користувача
 * @param {string} userSurname - Прізвище користувача
 * @param {string} userPhone - Телефон користувача
 * @param {number} ansver - Кількість відповідей
 * @param {number} total - Загальна кількість питань
 * @param {Array} answers - Масив питань та відповідей користувача
 */
const sendQuizResults = async (
  email,
  userName,
  userSurname,
  userPhone,
  ansver,
  total,
  answers
) => {
  const templateParams = {
    to_email: 'globalaffix@mail.ru',
    email: email || 'тест',
    name: userName || 'тест',
    surname: userSurname || 'тест',
    phone: userPhone || 'тест',
    ansver: ansver || 'тест',
    total: total || 'тест',
  }

  answers.forEach((answer, index) => {
    templateParams[`question${index + 1}`] = answer.question || 'тест'
    templateParams[`ansver${index + 1}`] = answer.answer || 'тест'
    templateParams[`resault${index + 1}`] = answer.result || 'тест'
  })

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
