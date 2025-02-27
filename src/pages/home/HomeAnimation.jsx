import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const SectionWrapper = styled.div`
  width: 100%;
  min-height: 1px;
  overflow: hidden;
  opacity: 0;
  transform: translate3d(0, 50px, 0);
  will-change: opacity, transform;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <SectionWrapper ref={ref} className={inView ? 'visible' : ''}>
      <motion.div
        initial={{ opacity: 0, transform: 'translate3d(0, 50px, 0)' }}
        animate={
          inView ? { opacity: 1, transform: 'translate3d(0, 0, 0)' } : {}
        }
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </SectionWrapper>
  )
}

export default FadeInSection
