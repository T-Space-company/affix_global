import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FAQWrapper,
  FAQTitle,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  ArrowIcon,
  FAQWrapperContent,
  FAQList,
} from './FAQ.styles'
import { ContainerPading } from '../../../../styles/GlobalStyles'
import { faqData } from './QetionFAQ'
import ArrowSVG from '../../../../assets/icons/ArrowFAQ.svg'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FAQWrapper>
      <ContainerPading>
        <FAQWrapperContent>
          <FAQTitle>Часто задаваемые вопросы</FAQTitle>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <ArrowIcon isOpen={openIndex === index}>
                  <motion.img
                    src={ArrowSVG}
                    alt="Arrow Icon"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </ArrowIcon>
              </FAQQuestion>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <FAQAnswer>{item.answer}</FAQAnswer>
              </motion.div>
            </FAQItem>
          ))}
        </FAQWrapperContent>
      </ContainerPading>
    </FAQWrapper>
  )
}

export default FAQ
