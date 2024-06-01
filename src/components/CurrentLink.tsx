import { Link, useLocation } from "react-router-dom"

interface CurrentLinkProps {
    children: React.ReactNode,
    to: string
}

const CurrentLink = ({ children, to }: CurrentLinkProps) => {
    const location = useLocation()
    const match = location.pathname === to

    return (
        <span className={match ? 'active' : ''}>
            <span>{match ? '>' : ''}</span>
            <Link to={to}>{children}</Link>
        </span>
    )
}

export default CurrentLink