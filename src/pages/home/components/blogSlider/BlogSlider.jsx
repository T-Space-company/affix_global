import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

import Img1 from '../../../../assets/images/BlogSlider1.png'
import Img2 from '../../../../assets/images/BlogSlider2.png'
import Img3 from '../../../../assets/images/BlogSlider3.png'
import Img4 from '../../../../assets/images/BlogSlider4.png'
import Img5 from '../../../../assets/images/BlogSlider5.png'

import NextSVG from '../../../../assets/icons/next.svg'
import PrevSVG from '../../../../assets/icons/prev.svg'
import { blogPosts } from '../../../blog/components/blogContent/BlogContentCard'
import { useNavigate } from 'react-router-dom'

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  @media (min-width: 1280px) {
    padding-bottom: 50px;
  }
`

const SliderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 20px;
`

const BlogCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px;
`

const BlogCard = styled.div`
  width: 240px !important;
  height: 320px;
  background: #111;
  border-radius: 15px;
  text-align: center;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`

const ImgWrapper = styled.div`
  width: 100%;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
`

const ImgEl = styled.img`
  width: 240px;
  height: 240px;
  overflow: hidden;
`

const BlogTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`

const ProgressItem = styled.div`
  width: 30px;
  height: 4px;
  background: ${({ active }) => (active ? '#fff' : '#444')};
  border-radius: 2px;
`

const PageCounter = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

const ArrowButton = styled.button`
  position: absolute;
  top: 87%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.866);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgb(255, 255, 255);
  }

  &.prev {
    left: 25%;
  }
  &.next {
    right: 25%;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`

const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerMode: true, centerPadding: '0px' },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerMode: true, centerPadding: '40px' },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: '60px' },
      },
    ],
  }

  return (
    <SliderWrapper>
      <SliderTitle>Блог</SliderTitle>

      <ArrowButton
        className="prev"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <img src={PrevSVG} alt="Previous" />
      </ArrowButton>
      <ArrowButton
        className="next"
        onClick={() => sliderRef.current.slickNext()}
      >
        <img src={NextSVG} alt="Next" />
      </ArrowButton>

      <Slider ref={sliderRef} {...settings}>
        {blogPosts.map((post, index) => (
          <BlogCardWrapper key={index}>
            <BlogCard
              onClick={() => navigate(`/blog?id=${post.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <ImgWrapper>
                <ImgEl src={post.image} alt={post.title} />
              </ImgWrapper>
              <BlogTitle>{post.title}</BlogTitle>
            </BlogCard>
          </BlogCardWrapper>
        ))}
      </Slider>

      <PaginationWrapper>
        <ProgressBar>
          {blogPosts.map((_, index) => (
            <ProgressItem key={index} active={index === currentSlide} />
          ))}
        </ProgressBar>

        <PageCounter>
          {currentSlide + 1} / {blogPosts.length}
        </PageCounter>
      </PaginationWrapper>
    </SliderWrapper>
  )
}

export default BlogSlider
