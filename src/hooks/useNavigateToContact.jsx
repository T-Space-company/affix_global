import { useNavigate } from 'react-router-dom'

const useNavigateToContact = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    window.scrollTo(0, 0)
    navigate('/contact')
  }

  return handleRedirect
}

export default useNavigateToContact
