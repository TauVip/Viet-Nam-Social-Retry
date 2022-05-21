import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const navLinks = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Message', icon: 'near_me', path: '/message' },
    { label: 'Discover', icon: 'explore', path: '/discover' },
    { label: 'Notify', icon: 'favorite', path: '/notify' }
  ]

  const { auth, theme } = useSelector(state => state)
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const isActive = pn => (pn === pathname ? 'active' : '')

  return (
    <div className='menu'>
      <ul className='navbar-nav flex-row'>
        {navLinks.map(link => (
          <li
            className={`nav-item px-2 ${isActive(link.path)}`}
            key={link.icon}
          >
            <Link className='nav-link' to={link.path}>
              <span className='material-icons'>{link.icon}</span>
            </Link>
          </li>
        ))}

        <li className='nav-item dropdown' style={{ opacity: 1 }}>
          <span
            className='nav-link dropdown-toggle'
            id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <Avatar src={auth.user.avatar} size='medium-avatar' />
          </span>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <Link className='dropdown-item' to={`/profile/${auth.user._id}`}>
              Profile
            </Link>

            <label
              htmlFor='theme'
              className='dropdown-item'
              onClick={() =>
                dispatch({ type: GLOBALTYPES.THEME, payload: !theme })
              }
            >
              {theme ? 'Light mode' : 'Dark mode'}
            </label>

            <div className='dropdown-divider' />
            <Link
              className='dropdown-item'
              to='/'
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Menu
