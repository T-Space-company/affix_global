import { ContainerPading } from '../../../../styles/GlobalStyles'
import {
  HeroWrapper,
  HeroWrapperTop,
  HeroWrapperBottom,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroBotomElLine,
  HeroBotomElTitle,
  HeroBotomElText,
  HeroBotomEl,
  HeroVideoBackground,
} from './HeroStyled'
import heroVideo from '../../../../assets/videos/1_1.mp4'
import useNavigateToContact from '../../../../hooks/useNavigateToContact'
const Hero = () => {
  const redirectToContact = useNavigateToContact()
  return (
    <HeroWrapper>
      <HeroVideoBackground autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </HeroVideoBackground>
      <ContainerPading>
        <HeroWrapperTop>
          <HeroTitle>
            GlobalAffiX — платформа, объединяющая профессионалов трафика и
            рекламодателей
          </HeroTitle>
          <HeroSubtitle>
            Мы создаём пространство, где каждый участник получает максимум
            возможностей для роста и стабильного дохода.
          </HeroSubtitle>
          <HeroButton onClick={redirectToContact}>
            Подать заявку сейчас
          </HeroButton>
        </HeroWrapperTop>
        <HeroWrapperBottom>
          <HeroBotomElLine>
            <HeroBotomElTitle>1 200+</HeroBotomElTitle>
            <HeroBotomElText>партнеров</HeroBotomElText>
          </HeroBotomElLine>
          <HeroBotomElLine>
            <HeroBotomElTitle>600+</HeroBotomElTitle>
            <HeroBotomElText>inhouse офферов</HeroBotomElText>
          </HeroBotomElLine>
          <HeroBotomEl>
            <HeroBotomElTitle>45%+</HeroBotomElTitle>
            <HeroBotomElText>выплата</HeroBotomElText>
          </HeroBotomEl>
        </HeroWrapperBottom>
      </ContainerPading>
    </HeroWrapper>
  )
}

export default Hero
