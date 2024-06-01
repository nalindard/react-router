import { Link } from 'react-router-dom'
import CurrentLink from './CurrentLink'


const NavBar = () => {
    return (
        <nav>
            | <Link to={'/'}>Home</Link>
            | <Link to={'/about'}>About</Link>
            | <Link to={'/settings'}>Settings</Link>

            {/* | <Link to={'/search'}>Settings</Link> */}
            | <Link to={{
                pathname: '/search',
                search: '?name=foo',

            }}>Search</Link>
            | <Link to={'/searchquery'}>Search Query</Link>


            | <Link to={'/article'}>Article</Link>
            | <Link to={'/article/127'}>Article 127</Link>

            | <CurrentLink to={'/massages'}>Massages</CurrentLink>
            | <CurrentLink to={'/massages/127'}>Massages 127</CurrentLink>

            | <CurrentLink to={'/protected'}>Protected</CurrentLink>

            {/* Slug */}
            | <Link to={'/xyz'}>404</Link>
            | <Link to={'/xyz'} state={{ backtoHome: true }}>404 - BackToHome</Link>
            {/* | <Link to={{ pathname: '/xyz', state: { backtoHome: true } }}>404 - BackToHome</Link> */}
            {/* | <Link to="/xyz" locationState={{ backtoHome: true }}>404 - BackToHome</Link> */}
        </nav>
    )
}

export default NavBar