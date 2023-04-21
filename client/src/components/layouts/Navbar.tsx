/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../sass/layouts/navbar.scss';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <nav className='nav-bar'>
            <div className='nav-bar__left'>
                <a href='#'>Home</a>
                <a href='#'>Articles</a>
                <a href='#'>Trailers</a>
                <a href='#'>Interviews</a>
            </div>
            <div className='nav-bar__center'>
                <img className='nav-bar__center--logo' src='assets/images/logo.png' alt='logo' />
            </div>
            <div className='nav-bar__right'>
                <div>
                    <input type='text' placeholder='Search' autoComplete='off' />
                    <SearchIcon className='search-btn' />
                </div>
                <a href="#">Log In</a>
                <a href="#">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar;