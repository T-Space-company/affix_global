import React from 'react'
import {
  BlogTitleWrapper,
  BlogTitleContainer,
  BlogTitleHeading,
  BlogTitleText,
} from './BlogTitleStyled'

const BlogTitle = () => {
  return (
    <BlogTitleWrapper>
      <>
        <BlogTitleContainer>
          <BlogTitleHeading>Блог Global Affix</BlogTitleHeading>
          <BlogTitleText>
            Добро пожаловать в наш блог о партнерской программе! Здесь мы
            погружаемся в мир партнерского маркетинга, делимся советами,
            стратегиями и историями успеха, которые помогут вам максимально
            увеличить свой доход.
          </BlogTitleText>
        </BlogTitleContainer>
      </>
    </BlogTitleWrapper>
  )
}

export default BlogTitle
