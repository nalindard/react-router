import { Navigate, useLocation } from "react-router-dom"

interface RequiredAuthProps {
    children: React.ReactNode
}
const RequiredAuth = ({ children }: RequiredAuthProps) => {

    const authed = !true
    const location = useLocation()

    return authed ? children : <Navigate to='/' replace state={{ path: location.pathname }} />

    // return (
    //     <div>
    //         RequiredAuth
    //         {children}
    //     </div>
    // )
}

export default RequiredAuth

// In the Login component
// const handleLogin = () => {
//     login().then(() => {
//       navigate(state?.path || "/dashboard");
//     });
//   };