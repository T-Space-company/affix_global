import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ModalOverlay,
  ModalContent,
  NavLinks,
  NavLinkItem,
} from './NavigationModal.styles'
import { NavBtnWrapp } from './NavigationModal.styles'
import { NavBtnWhatsapp } from './NavigationModal.styles'
import { NavBtnTelegram } from './NavigationModal.styles'

import SVGTELEGRAM from '../../../../assets/icons/svgTelegram.svg'
import SVGWhatsapp from '../../../../assets/icons/svgWhatsapp.svg'

const modalVariants = {
  open: { x: 0 },
  closed: { x: '100%' },
}

const NavigationModal = ({ isOpen, toggleModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }
  }, [isOpen])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={toggleModal}
          />
          <motion.div
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '80px',
              right: 0,
              width: '100%',
              height: 'calc(100% - 80px)',
              zIndex: 1000,
            }}
          >
            <ModalContent>
              <NavLinks>
                <NavLinkItem to="/" onClick={toggleModal}>
                  Про нас
                </NavLinkItem>
                <NavLinkItem to="/advantages" onClick={toggleModal}>
                  Преимущества
                </NavLinkItem>
                <NavLinkItem to="/contact" onClick={toggleModal}>
                  Контакты
                </NavLinkItem>
                <NavLinkItem to="/blog" onClick={toggleModal}>
                  Блог
                </NavLinkItem>
                <NavLinkItem to="/contact" onClick={toggleModal}>
                  FAQ
                </NavLinkItem>
              </NavLinks>
              <NavBtnWrapp>
                <NavBtnTelegram>
                  <span>Перейти в наш Telegram Bot</span>
                  <img src={SVGTELEGRAM} />
                </NavBtnTelegram>
                <NavBtnWhatsapp>
                  <span>Написать нам в Whatsapp</span>
                  <img src={SVGWhatsapp} />
                </NavBtnWhatsapp>
              </NavBtnWrapp>
            </ModalContent>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default NavigationModal
