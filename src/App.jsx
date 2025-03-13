import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Loading from './components/loading/Loading'
import useMediaLoaded from './hooks/useMediaLoaded'

const Home = lazy(() => import('./pages/home/Home'))
const Advantages = lazy(() => import('./pages/Advantages'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const Quiz = lazy(() => import('./pages/quiz/Quiz'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const isLoaded = useMediaLoaded()

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/advantages"
              element={
                <Suspense fallback={<Loading />}>
                  <Advantages />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<Loading />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/quiz"
              element={
                <Suspense fallback={<Loading />}>
                  <Quiz />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App
