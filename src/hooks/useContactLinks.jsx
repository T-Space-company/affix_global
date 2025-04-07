const WHATSAPP_NUMBER = '+79499443052'
const TELEGRAM_GROUP = 'https://t.me/+aXxDYEcr8qk0MTU6'
const TELEGRAM_MSG = 'https://t.me/ekaterinaglobalaffixhr'
const TELEGRAM_BOT = 'https://t.me/GlobalAffiX_Bot'

export const openWhatsApp = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`
  window.open(url, '_blank')
}

export const openTelegram = () => {
  window.open(TELEGRAM_GROUP, '_blank')
}

export const openTelegramMSG = () => {
  window.open(TELEGRAM_MSG, '_blank')
}

export const openTelegramBot = () => {
  window.open(TELEGRAM_BOT, '_blank')
}
