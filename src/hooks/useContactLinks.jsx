const WHATSAPP_NUMBER = '+79292170932'
const TELEGRAM_GROUP = 'https://t.me/+baCOuD6UZOtkYWYy'

export const openWhatsApp = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`
  window.open(url, '_blank')
}

export const openTelegram = () => {
  window.open(TELEGRAM_GROUP, '_blank')
}
