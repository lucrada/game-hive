import '../../sass/components/horizontal_sliding_tile.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { VerticalSpacer } from '../Helpers/VerticalSpacer';

export interface Card {
    title: string,
    img: string,
    desc: string,
    rating: number,
    players: number,
}

function SlidingCard(props: { details: Card }) {
    const { details } = props;

    return (
        <div className='sliding-tile-parent__slider-gameList--game'>
            <img src={details.img} alt={details.title} />
            <div className='sliding-tile-parent__slider-gameList--game__card-details'>
                <div className='sliding-tile-parent__slider-gameList--game__card-details--header'>
                    <h2>{details.title}</h2>
                    <span>{details.rating}/5</span>
                </div>
                <VerticalSpacer rem={0.2} />
                <div className='sliding-tile-parent__slider-gameList--game__card-details--info'>
                    <span>Players: {details.players}</span>
                </div>
                <VerticalSpacer rem={0.2} />
                <div className='sliding-tile-parent__slider-gameList--game__card-details--body'>
                    <p>{details.desc}</p>
                </div>
            </div>
        </div>
    );
}

export function HorizontalSlidingTile(props: { title: string, cardDetails: Array<Card>, link: string }) {
    const { title, cardDetails, link } = props;

    return (
        <div className='sliding-tile-parent'>
            <div className='sliding-tile-parent__category-title'>
                <h2>{title}</h2>
                <Link to={link} className='sliding-tile-parent__category-title--more'>Show more</Link>
            </div>
            <div className='sliding-tile-parent__slider'>
                <KeyboardArrowLeftIcon className='sliding-tile-parent__slider--left-slide' />
                <div className="sliding-tile-parent__slider-gameList">
                    {cardDetails.map(card => <SlidingCard details={card} />)}
                </div>
                <KeyboardArrowRightIcon className='sliding-tile-parent__slider--right-slide' />
            </div>
        </div>
    );
}