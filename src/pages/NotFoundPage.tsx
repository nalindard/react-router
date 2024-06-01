import { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'


// interface NotFoundPageProps {
//   backtoHome?: boolean
// }

// const NotFoundPage: React.FC<NotFoundPageProps> = ({ backtoHome }) => {
const NotFoundPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { backtoHome } = location.state || {}

  useEffect(() => {
    console.log('backtoHome', backtoHome);
  }, [backtoHome])

  if (backtoHome) return <Navigate to='/' />

  return (
    <div>
      <div>NotFoundPage</div>
      <button onClick={() => (navigate('/'))}>Back To Present</button>
    </div>
  )
}

export default NotFoundPage