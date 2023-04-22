import Navbar from '../../components/layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../child/Home';
import Articles from '../child/Articles';
import News from '../child/News';
import Trailers from '../child/Trailers';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/news' element={<News />} />
                <Route path='/trailers' element={<Trailers />} />
            </Routes>
        </>
    );
}