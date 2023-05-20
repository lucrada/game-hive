import { PostForm } from '../../components/forms/PostForm';
import { DashboardNavBar } from '../../components/layouts/DashboardNavBar';
import '../../components/layouts/DashboardNavBar';
import '../../sass/pages/dashboard.scss';

export function Dashboard(): JSX.Element {
    return (
        <div className='dashboard'>
            <header className='dashboard__header'>
                <DashboardNavBar />
            </header>
            <main className='dashboard__body'>
                <div className='dashboard__body--left_pane'></div>
                <div className='dashboard__body--center_pane'>
                    <PostForm />
                </div>
                <div className='dashboard__body--right_pane'></div>
            </main>
            <footer className='dashboard__footer'>

            </footer>
        </div>
    );
}