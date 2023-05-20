import { Link } from "react-router-dom";
import '../../sass/layouts/dashboard_nav.scss';

export function DashboardNavBar(): JSX.Element {
    return (
        <div className='nav-bar'>
            <Link className='nav-bar__logo' to='#'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='logo' />
            </Link>
            <input type='text' name='search' className='nav-bar__search' placeholder='Search' />
            <div className='nav-bar__drop-down'>
                <div className='nav-bar__drop-down--user'>
                    <span>S</span>
                    <div className='nav-bar__drop-down--user__menu'></div>
                </div>
            </div>
        </div>
    );
}