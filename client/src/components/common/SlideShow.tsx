import '../../sass/components/slide_show.scss';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { HorizontalSpacer } from '../Helpers/HorizontalSpacer';
import { VerticalSpacer } from '../Helpers/VerticalSpacer';

export function SlideShow(): JSX.Element {
    return (
        <div className='slide-show-container'>
            <h1>Latest Releases</h1>
            <div className="slide-show-container__top">
                <img className='slide-show-container__top--image' src={`${process.env.PUBLIC_URL}/assets/test_images/background.jpg`} alt='alt' />
                <div className="slide-show-container__top--info">
                    <div>
                        <h1>NEW BLOODLINE DLC TRAILER</h1>
                        <p>Adapt and overcome in a near-future world transforming by disorder Battlefield returns on March, 2022</p>
                        <a href='#watch_trailer'><LiveTvIcon /> <HorizontalSpacer rem={0.5} />  Watch Trailer</a>
                    </div>
                </div>
            </div>
            <div className='slide-show-container__bottom'>
                <div className='slide-show-container__bottom--options'>
                    <div>
                        <VerticalSpacer rem={1} />
                        <h2>THE NEW GAME LAND</h2>
                        <VerticalSpacer rem={1} />
                        <p>Set tight we are offering new action games which are coming on the ground</p>
                        <VerticalSpacer rem={1} />
                        <span>O O O O</span>
                        <VerticalSpacer rem={1} />
                    </div>
                </div>
                <div className='slide-show-container__bottom--selector'>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background.jpg`} alt='alt' />
                    </div>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background2.jpg`} alt='alt' />
                    </div>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background3.jpg`} alt='alt' />
                    </div>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background4.jpg`} alt='alt' />
                    </div>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background2.jpg`} alt='alt' />
                    </div>
                    <div className='slide-show-container__bottom--selector__item'>
                        <img src={`${process.env.PUBLIC_URL}/assets/test_images/background3.jpg`} alt='alt' />
                    </div>
                </div>
            </div>
        </div >
    );
}