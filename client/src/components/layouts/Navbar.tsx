/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../sass/components/layouts/navbar.scss';

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
                <h3>Logo Image</h3>
            </div>
            <div className='nav-bar__right'>
                <div>
                    <input type='textbox' />
                    <input type='button' value='Search' />
                </div>
                <a href="#">Log In</a>
                <a href="#">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar;