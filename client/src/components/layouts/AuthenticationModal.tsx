import { Link } from "react-router-dom";
import '../../sass/layouts/auth_modal.scss';

export function AuthenticationModal(): JSX.Element {
    return (
        <div className='auth-modal-bg'>
            <div className="auth-modal-bg__modal">
                <h2>Login</h2>
                <form action='#'>
                    <input className='input-text-box-1' type='text' name='username' placeholder='Username' />
                    <input className='input-text-box-1' type='password' name='password' placeholder='Password' />
                    <div>
                        <label className='auth_modal-bg__modal--remember_label'>
                            <input type='checkbox' name='remember_me' />
                            <span>Remember Me</span>
                        </label>
                        <Link to='#'>Forgot password</Link>
                    </div>
                    <input className='input-btn-1' type='submit' value='Login' />
                    <Link to='#'>Create an account</Link>
                </form>
            </div>
        </div>
    );
}