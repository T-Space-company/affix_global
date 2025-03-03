import videoFile from '../../../../assets/videos/2_1.mp4'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    max-width: 100%;
  }
`

const Video = styled.video`
  width: 70%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    max-width: 100%;
  }
`

const QuizVideo = () => {
  return (
    <VideoWrapper>
      <Video autoPlay loop muted playsInline>
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </Video>
    </VideoWrapper>
  )
}

export default QuizVideo
