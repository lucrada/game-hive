/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../sass/layouts/navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='nav-bar'>
            <div className='nav-bar__left'>
                <NavLink className='nav-bar-link' to='/'>Home</NavLink>
                <NavLink className='nav-bar-link' to='/articles'>Articles</NavLink>
                <NavLink className='nav-bar-link' to='/news'>News</NavLink>
                <NavLink className='nav-bar-link' to='/trailers'>Trailers</NavLink>
            </div>
            <div className='nav-bar__center'>
                <Link to='/'><img className='nav-bar__center--logo' src='assets/images/logo.png' alt='logo' /></Link>
            </div>
            <div className='nav-bar__right'>
                <div>
                    <input type='text' placeholder='Search' autoComplete='off' />
                    <SearchIcon className='search-btn' />
                </div>
                <a className='nav-bar-link' href="#">Log In</a>
                <a className='nav-bar-link' href="#">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar;