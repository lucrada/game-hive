import '../../sass/components/horizontal_sliding_tile.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

interface GameTile {
    name: string,
    rating: number,
}

export function HorizontalSlidingTile(props: { title: string, gameList: Array<GameTile>, link: string }) {
    const { title, gameList, link } = props;

    return (
        <div className='sliding-tile-parent'>
            <div className='sliding-tile-parent__category-title'>
                <h2>{title}</h2>
                <Link to={link} className='sliding-tile-parent__category-title--more'>Show more</Link>
            </div>
            <div className='sliding-tile-parent__slider'>
                <KeyboardArrowLeftIcon className='sliding-tile-parent__slider--left-slide' />
                <div className="sliding-tile-parent__slider-gameList">
                    {gameList.map(game => <div className='sliding-tile-parent__slider-gameList--game'></div>)}
                </div>
                <KeyboardArrowRightIcon className='sliding-tile-parent__slider--right-slide' />
            </div>
        </div>
    );
}