import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'FixelDisplay';
    src: url('../assets/fonts/FixelDisplay-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'FixelDisplay';
    src: url('../assets/fonts/FixelDisplay-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'FixelDisplay';
    src: url('../assets/fonts/FixelDisplay-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'FixelDisplay';
    src: url('../assets/fonts/FixelDisplay-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  body {
    font-family: 'FixelDisplay', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p {
  overflow: hidden;

}


  body {
   
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav a {
    margin-right: 15px;
  }


  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 0 ${({ theme }) => theme.spacing.containerPadding}; */
  }

  /* Адаптивні налаштування */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .container {
      max-width: 960px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .container {
      max-width: 720px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .container {
      max-width: 100%;
      /* padding: 0 10px; */
    }
  }
`

export const ContainerPading = styled.div`
  padding-right: 25px;
  padding-left: 25px;
  max-width: 420px;
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`
