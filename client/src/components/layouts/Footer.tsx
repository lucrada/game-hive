import '../../sass/layouts/footer.scss';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className='footer'>
            <div className="footer__top">
                <p className='footer__top--copyright'>Game Hive &copy; copyright 2023</p>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom--left">
                    <h2>Connect with us</h2>
                    <div>
                        <Link to=''>Facebook</Link>
                        <Link to=''>Twitter</Link>
                        <Link to=''>Instagram</Link>
                        <Link to=''>Reddit</Link>
                    </div>
                </div>
                <div className="footer__bottom--right">
                    <p>Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/articles'>Articles</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/trailers'>Trailers</Link>
                    <Link to='/'>Login/Create an account</Link>
                </div>
            </div>
        </div>
    );
}